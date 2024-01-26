const { Router } = require("express");

const movieNotesRoutes = Router();

movieNotesRoutes.get("/", () => {console.log("Notas de filme")});

module.exports = movieNotesRoutes;