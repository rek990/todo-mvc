const express = require("express");
const router = express.Router();
// controller that the GET request on the /todos route below gets handed off to
const todosController = require("../controllers/todos");

// GET request on /todos route
// router gets the controller (todosController.getTodos in this case, see above) to hand the request off to
// /todos/
router.get("/", todosController.getTodos);

// POST request on /todos/createTodo route
// router gets the controller (todosController.createTodo in this case, see above) to hand the request off to
// /todos/createTodo
router.post("/createTodo", todosController.createTodo);

// /todos/markComplete
router.put("/markComplete", todosController.markComplete);

// todos/markIncomplete
router.put("/markIncomplete", todosController.markIncomplete);

// /todos/deleteTodo
router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
