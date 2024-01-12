require("dotenv").config();

const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { UserRouter } = require("./plugins/users/routers");
const {HelloWorldRouter} = require("./modules/hello-world/routers");

const app = express();

DatabaseMongoDBConnector({hideSuccessMessage: false});

app.use(express.json());

LibModuleRegister(app, "users", UserRouter);
LibModuleRegister(app, "hello-world", HelloWorldRouter)

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
