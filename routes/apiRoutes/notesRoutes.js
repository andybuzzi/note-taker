const router = require("express").Router();
const path = require("path");
const fs = require("fs");

const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

router.post("/notes", (req, res) => {
  //set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

function deleteNote(id, notesArray) {
  for (let i = 0; i < notesArray.length; i++) {
    let note = notesArray[i];

    if (note.id == id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notesArray, null, 2)
      );
      break;
    }
  }
}

router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(true);
});

module.exports = router;
