import Sequelize from "sequelize";

console.log(process.env.DB_NAME);
export const sequelize = new Sequelize(
  "examen_daw2",
  "root",
  "mgia730@lc@3b3s",
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((error) => {
    console.error("Ocurrio un error" + error);
  });
