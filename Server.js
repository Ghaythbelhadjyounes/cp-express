const express = require("express");
const fs = require("fs");
const byDate = require("./auth");
const app = express();

app.get("/Home.html",byDate , (req, res) => {
  fs.readFile("./Home.html","utf8", (err, data) => {
    err?res.end("File Not Found")&&console.error(err):res.end(data);
  });
  
});
const PORT = 5000;
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running on port ${PORT} ...`);
});
