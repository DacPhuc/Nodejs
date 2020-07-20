const express = require("express");
const app = express();

app.get("/node/hello", (req, res) => {
  console.log("Node js here running");
  res.status(200).send("Hello World Dac Phuc !");
});
app.listen(3001, () => console.log("Server ready"));
