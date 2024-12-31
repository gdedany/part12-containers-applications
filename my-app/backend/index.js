const express = require("express");

const app = express();

const PORT = 3000;

app.get("/health", (req, res) => {
  res.send("ok");
});
app.get("/version", (req, res) => {
  res.send({ version: 3 });
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
