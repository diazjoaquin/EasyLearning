const express = require("express");
const morgan = require("morgan");
const Routes = require("./Routes/index.js");

const server = express();

server.use(morgan("dev"));
server.use("/", Routes);

module.exports = server;
