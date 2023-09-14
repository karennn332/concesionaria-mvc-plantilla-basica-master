const {Router} = require("express");
const {empleadosController} = require("../controllers/empleados.controller");

const empleadosRoutes = Router();


empleadosRoutes.post("/", empleadosController);




module.exports = {empleadosRoutes} ;