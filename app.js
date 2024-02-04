"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
process.env.NODE_ENV = "staging";
const config = require("./config/config.json");
const defaultConfig = config.production;
const environment = process.env.NODE_ENV || "production";
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.set("secret", global.gConfig.secret_key);
const port = global.gConfig.port;

app.listen(port, () => {
  console.log(`Node.js app is listening at http://localhost:${port}`);
});
