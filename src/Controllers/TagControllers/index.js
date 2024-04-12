const db = require("../../database");

class TagControllers {
  async index(request, response) {
    const { user_id } = request.params;

    const tags = await db("movieTags").where({ user_id }).orderBy("name");

    return response.json(tags);
  }
}

module.exports = TagControllers;
