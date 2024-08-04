const db = require("../../database");
const bcrypt = require("bcryptjs");

class UserControllers {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      response.status(400).send({ error: "Nome é obrigatório" });
      return;
    }

    if (!email) {
      response.status(400).send({ error: "Email é obrigatório" });
      return;
    }

    if (!password) {
      response.status(400).send({ error: "Senha é obrigatória" });
      return;
    }

    const checkedEmailIfExists = await db
      .select("email")
      .from("users")
      .where({ email });

    if (checkedEmailIfExists.length > 0) {
      response.status(409).send({ error: "Email já utilizado!" });
      return;
    }

    const hash = await bcrypt.hash(password, 8);

    await db("users").insert({ name, email, password: hash });

    response.sendStatus(204);
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const user = await db("users").where({ id }).first();

    if (!user) {
      response
        .status(400)
        .send({ error: "Usuário não encontrado na base de dados" });

      return;
    }

    const userFound = await db("users").where({ email }).first();

    if (userFound) {
      response.status(409).send({ error: "Email já cadastrado" });
      return;
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (user.password && !old_password) {
      response.status(400).send({ error: "Favor informar a senha anterior" });
      return;
    }

    if (user.password && old_password) {
      const checkOldPassword = await bcrypt.compare(
        old_password,
        user.password
      );

      if (!checkOldPassword) {
        response
          .status(400)
          .send({ error: "Favor informar senha antiga corretamente" });
        return;
      }

      user.password = await bcrypt.hash(password, 8);
    }

    await db("users")
      .where({ id })
      .update({ name: user.name, email: user.email, password: user.password });

    response.sendStatus(204);
  }
}

module.exports = UserControllers;
