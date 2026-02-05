const { Router } = require("express");
const HomeController = require("../controllers/HomeController");
const ClientesController = require ("../controllers/ClientesController");

const routes = Router();

routes.get("/", HomeController.index);

routes.post("/clientes", ClientesController.create);

module.exports = routes;