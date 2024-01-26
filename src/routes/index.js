const { Router } = require("express");
const userRoutes = require("./users.routes");
const movieNotesRoutes = require("./notes.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", movieNotesRoutes);

module.exports = routes;