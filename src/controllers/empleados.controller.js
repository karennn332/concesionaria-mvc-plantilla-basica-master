const {empleadoService} = require("./../services/empleados.services");

async function empleadosController(req, res) {
    try {
      //data del request:
      const data = req.body;
  
      //servicio
      const resService = await empleadoService(data);
  
      //respuesta:
      res.json({ id_empleado: resService });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
  
    module.exports = {empleadosController};
