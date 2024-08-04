const { Router } = require("express");
const TagControllers = require("../Controllers/TagControllers");

const movieTagsRoutes = Router();
const tagControllers = new TagControllers();

movieTagsRoutes.get("/:user_id", tagControllers.index);

module.exports = movieTagsRoutes;
