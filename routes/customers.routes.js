const express = require("express")
const router = express.Router()
const Customer = require("../models/Customer.model")


//vamos a agregar las rutas
//http://localhost:5005/api/customers
//Todos los customers
router.get("/", async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers);
    } catch (err) {
        console.log(err)
    }
});

//vamos a agregar las rutas
//http://localhost:5005/api/customers/{ID}
//Todos los customers
router.get("/:id", async (req, res) => {
    try {
        const customer = await Customer.findOne({ _id: req.params.id })
        res.json(customer);
    } catch (err) {
        console.log(err)
    }
});

//POST http://localhost:5005/api/customers
//Crear Customer y recibir los datos en req.body... meter los datos en una box
router.post("/", (req, res) => {
    const { body } = req;

    console.log(body);

    Customer.create(body)
        .then(resultado => {
            res.json(resultado)
        }).catch(function (error) {
            console.log(error)
            res.status(500).json({
                error: {
                    message: error
                }
            })
        })

});
//vamos a borrar http://localhost:5005/api/customers/{ID}
//Todos los customers
router.delete("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete({ _id: req.params.id })
        res.json(customer);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;

