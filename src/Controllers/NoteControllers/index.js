const db = require("../../database");

class NoteControllers {
  async create(request, response) {
    const { title, description, tags, rating } = request.body;
    const { user_id } = request.params;

    const [note_id] = await db("movieNotes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        name,
        user_id,
      };
    });

    await db("movieTags").insert(tagsInsert);

    response.sendStatus(204);
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await db("movieNotes").where({ id }).first();
    const tags = await db("movieTags").where({ note_id: id }).orderBy("name");

    return response.json({
      ...note,
      tags,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await db("movieNotes").where({ id }).delete();

    return response.sendStatus(204);
  }

  async index(request, response) {
    const { user_id, title, tags } = request.query;

    let notes;

    if (tags) {
      const filterTags = tags.split(",").map((tag) => tag.trim());

      notes = await db("movieTags")
        .select(["movieNotes.id", "movieNotes.title", "movieNotes.user_id"])
        .where("movieNotes.user_id", user_id)
        .whereLike("movieNotes.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("movieNotes", "movieNotes.id", "movieTags.note_id")
        .orderBy("movieNotes.title");
    } else {
      notes = await db("movieNotes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await db("movieTags").where({ user_id });

    const notesWithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tags.note_id === notes.id);

      return {
        ...notes,
        tags: noteTags,
      };
    });

    return response.json(notesWithTags);
  }
}

module.exports = NoteControllers;
