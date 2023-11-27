// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/cs212/lab7", (req, res) => {
  const { noun, adjective, verb, pluralNoun, adverb } = req.body;

  // Your Mad Lib template
  const madLib = `The ${adjective} ${noun} ${verb} ${pluralNoun} ${adverb}.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
