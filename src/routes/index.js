const { Router } = require("express");
const userRoutes = require("./users.routes");
const movieNotesRoutes = require("./notes.routes");
const movieTagsRoutes = require("./tags.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", movieTagsRoutes);

module.exports = routes;
