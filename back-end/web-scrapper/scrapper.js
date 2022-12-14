const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const cors = require("cors");

const json = fs.readFileSync("./data/data.json");
const data = JSON.parse(json);
// length of data 4916

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.use(cors());

app.get("/api/data", (req, res) => {
  const r = getRndInteger(0, 4915);
  res.json(data[r]);
});

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
