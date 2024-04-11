const db = require("../../database");

class UserControllers {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      response.status(400).send("Nome é obrigatório");
      return;
    }

    await db("users").insert({ name, email, password });

    response.sendStatus(204);
  }
}

module.exports = UserControllers;
