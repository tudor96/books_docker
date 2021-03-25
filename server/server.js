"use strict";
require("dotenv").config();

const Hapi = require("@hapi/hapi");
const routes = require("hapi-auto-routes");
const mongoose = require("mongoose");
const mongoload = require("mongoload");

const connectionString = "mongodb://mongo:27017/books";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

mongoload.bind(mongoose).load({
  pattern: `${__dirname}/models/*.js`,
});

db.on("error", () => {
  console.error("Connection to db failed!");
  process.exit(0);
});

db.once("open", function () {
  console.info(`MongoDB::Connected at ${connectionString}`);
  init();
});

db.on("disconnected", (err) => {
  console.error("Connection terminated to db", err);
  process.exit(0);
});

const init = async () => {
  const server = Hapi.server({
    port: 5000,
  });

  routes.bind(server).register({
    pattern: `${__dirname}/routes/**/*.js`,
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
