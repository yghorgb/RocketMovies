const { Router } = require("express");
const UserControllers = require("../Controllers/UserControllers");

const userRoutes = Router();
const userControllers = new UserControllers();

userRoutes.post("/", userControllers.create);
userRoutes.put("/:id", userControllers.update);

module.exports = userRoutes;
