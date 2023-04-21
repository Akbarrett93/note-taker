const express = require("express");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

const app = express();

// Get route for all notes
app.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => {
    res.json(JSON.parse(data));
    console.log("Here is the request", JSON.parse(data));
  });
});

// Post route for submitting a note
app.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid,
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("Note added.");
  } else {
    res.error("Error adding note.");
  }
});

module.exports = app;
