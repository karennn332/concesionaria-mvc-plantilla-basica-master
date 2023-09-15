const {Router} = require("express");
const {clienteController} = require("../controllers/cliente.controller");

const clientesRoutes = Router();


clientesRoutes.post("/", clienteController);




module.exports = {clientesRoutes} ;