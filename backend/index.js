import express from "express";
import cors from "cors";
import { sequelize } from "./config/database.js";
import { config } from "dotenv";
import "./model/empleado.js";
import "./model/producto.js";
import { fn, col } from "sequelize";
import { Producto } from "./model/producto.js";
config({ path: "./backend/.env" });
config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/promedio-productos-categoria", async (req, res) => {
  try {
    const datos = await Producto.findAll({
      attributes: [
        "category",
        [fn("sum", col("value")), "total"],
        [fn("count", col("category")), "cantidad"],
      ],
      group: ["category"],
      raw: true,
    });

    const resultado = datos.map((d) => ({
      categoryCode: d.categoryCode,
      promProductos: d.total / d.cantidad,
    }));

    if (resultado.lemgth == 0) {
      res.status(400).send({ mensaje: "No existen registros" });
    } else {
      res.status(200).send(resultado);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
});

app.get("/productos-marca", async (req, res) => {
  try {
    const resultado = await Producto.findAll({
      attributes: ["brand", [fn("COUNT", col("brand")), "cantidad_marca"]],
      group: ["brand"],
      raw: true,
    });

    if (resultado.lemgth == 0) {
      res.status(400).send({ mensaje: "No existen registros" });
    } else {
      res.status(200).send(resultado);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
});
app.use((err, req, res) => {
  console.error("Error global", err.message);
  res.status(500).json({ message: "Error interno del servidor a" });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
await sequelize.authenticate();
await sequelize.sync({ force: false });
console.log("Conexion establecida");
