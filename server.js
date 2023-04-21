const express = require("express");
const path = require("path");
const api = require("./routes/index");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static("public"));

// Routes for the page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
