require("dotenv").config();
const express = require("express");
const { vehiculoRoute } = require("./routes/vehiculo.routes");
const { proveedorRoutes } = require("./routes/proveedor.routes");
const {empleadosRoutes} = require("./routes/empleados.routes");
const { clientesRoutes } = require("./routes/cliente.routes");




const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.json());

//rutas:
app.use("/vehiculo", vehiculoRoute);
app.use("/proveedor", proveedorRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/clientes",clientesRoutes);







app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
