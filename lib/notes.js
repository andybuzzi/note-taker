const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  //we added require fs on top of the file
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),

    //  two arguments used in the method, null and 2, are means of keeping our data formatted. The null argument means we don't want to edit any of our existing data; if we did, we could pass something in there. The 2 indicates we want to create white space between our values to make it more readable. If we were to leave those two arguments out, the entire animals.json file would work, but it would be really hard to read.

    JSON.stringify({ notes: notesArray }, null, 2)
  );

  //return finished code to post route for response
  return note;
}

module.exports = {
  createNewNote,
};
