const { Router } = require("express");

const userRoutes = Router();

userRoutes.get("/", () => {console.log("Usuário")});

module.exports = userRoutes;