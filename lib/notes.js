const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  //we added require fs on top of the file
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),

    JSON.stringify({ notes: notesArray }, null, 2)
  );

  //return finished code to post route for response
  return note;
}

module.exports = {
  createNewNote,
};
