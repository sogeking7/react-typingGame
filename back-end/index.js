const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const cors = require("cors");

const json = fs.readFileSync("./data/data.json");
const data = JSON.parse(json);
// length of data 4916

app.use(cors());

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
