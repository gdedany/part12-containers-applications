const express = require("express");
const { Todo } = require("../mongo");
const { getAsync, setAsync } = require("../redis");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

const incrementStats = async () => {
  const currentTodos = (await getAsync("added_todos")) || 0;

  await setAsync("added_todos", Number(currentTodos) + 1);
};

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  await incrementStats();

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const newTodo = req.body;

  const updated = await Todo.findOneAndUpdate({ _id: req.todo._id }, newTodo, {
    new: true,
  });
  res.send(updated);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
