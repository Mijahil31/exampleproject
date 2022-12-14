require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectMySQL, dbMigrateMysql } = require("./config/mysql.config.js");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger.docs");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", require("./routes"));

app.listen(port, () =>
    console.log(`Tu server esta listo por el puerto ${port}`)
);

dbConnectMySQL();

if (process.env.MYSQL_MIGRATE === "true") {
    dbMigrateMysql();
}