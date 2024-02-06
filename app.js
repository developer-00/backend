"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");
const _ = require("lodash");

const app = express();
app.use(cors());
process.env.NODE_ENV = "staging";
const config = require("./config/config.json");
const defaultConfig = config.production;
const environment = process.env.NODE_ENV || "production";
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;
const port = global.gConfig.port;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const connectToMongo = require("./db/dbservice");
connectToMongo();
app.set("secret", global.gConfig.secret_key);

// Swagger UI
app.use(
  "/service/api/market/v1/swagger-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

//Routes
const users = require("./routes/users");
app.use("/service/api/market/v1/user", users);

app.get("/service/api/market/v1/ping", (req, res) => {
  res.send({ message: "pong" });
});

//Port
app.listen(port, () => {
  console.log(`Node.js app is listening at http://localhost:${port}`);
});
