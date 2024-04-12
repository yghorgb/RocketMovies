const { Router } = require("express");
const NoteControllers = require("../Controllers/NoteControllers");

const movieNotesRoutes = Router();
const noteControllers = new NoteControllers();

movieNotesRoutes.post("/:user_id", noteControllers.create);
movieNotesRoutes.get("/:id", noteControllers.show);
movieNotesRoutes.delete("/:id", noteControllers.delete);
movieNotesRoutes.get("/", noteControllers.index);

module.exports = movieNotesRoutes;
