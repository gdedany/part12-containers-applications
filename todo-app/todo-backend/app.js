const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");
const { getAsync } = require("./redis");
const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.get("/statistics", async (req, res) => {
  const addedTodos = await getAsync("added_todos");
  res.send({ added_todos: Number(addedTodos) || 0 });
});

app.use("/", indexRouter);
app.use("/todos", todosRouter);

module.exports = app;
