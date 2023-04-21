const express = require("express");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");
const db = require("../db/db.json");

const app = express();

// Get route for all notes
app.get("/notes", (req, res) => {
  readFromFile(db).then((data) => res.json(json.parse(data)));
});

// Post route for submitting a note
app.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("Note added.");
  } else {
    res.error("Error adding note.");
  }
});

module.exports = app;
