const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname));

console.log(__dirname);
app.get("", (req, res) => {
  console.log("LOADINsddsdssdsddsdsdssddsdsdG");
  res.sendFile(__dirname + "/index_externaljs.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
