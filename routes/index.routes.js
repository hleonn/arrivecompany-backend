const router = require("express").Router();
const authRoutes = require("./auth.routes");

const customersRoutes=require("./customers.routes")

/* GET home page http://localhost:5005/api*/
//vamos a agregar las rutas
router.get("/", (req, res, next) => {
  res.json("Arrive-Company");
});

router.use("/auth", authRoutes);

router.use("/customers", customersRoutes);

module.exports = router;
