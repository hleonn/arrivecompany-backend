const express = require("express")
const router = express.Router()
const Customer = require("../models/Transport.model")


//vamos a agregar las rutas
//http://localhost:5005/api/InfoTransport
//Todos los transport
router.get("/", async (req, res) => {
    try {
        const transport = await Transport.find()
        res.json(transport);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//vamos a agregar las rutas
//http://localhost:5005/api/transport/{ID}
//Todos los transport
router.get("/:id", async (req, res) => {
    try {
        const transport = await Transport.findOne({ _id: req.params.id })
        res.json(transport);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//POST http://localhost:5005/api/InfoTransport
//Crear transport y recibir los datos en req.body... meter los datos en una box
router.post("/", async (req, res) => {
    const { body } = req;

    console.log(body);

    // Transport.create(body)
    //     .then(resultado => {
    //         res.json(resultado)
    //     }).catch(function (error) {
    //         console.log(error)
    //         res.status(500).json({
    //             error: {
    //                 message: error
    //             }
    //         })
    //     })

    try {
        const resultado = await Transport.create(body);
        res.json(resultado)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: {
                message: error
            }
        })
    }
});
//vamos a borrar http://localhost:5005/api/customers/{ID}
//Todos los customers
router.delete("/:id", async (req, res) => {
    try {
        const transport = await Transport.findByIdAndDelete({ _id: req.params.id })
        res.json(transport);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: {
                message: error
            }
        })
    }
});

module.exports = router;

