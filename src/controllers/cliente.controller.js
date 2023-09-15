const {clienteService} = require("./../services/cliente.services");

async function clienteController(req, res) {
    try {
      //data del request:
      const data = req.body;
  
      //servicio
      const resService = await clienteService(data);
  
      //respuesta:
      res.json({ id_cliente: resService });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  
    module.exports = {clienteController};