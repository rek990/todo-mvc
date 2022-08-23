const Todo = require("../models/Todo");

// exports an object
// getTodos, createTodo is a method (because it's tied to a function)

module.exports = {
  getTodos: async (req, res) => {
    try {
      // go to models to find the Todo model, finds documents in the db, and counts the number of documents (i.e., todos) remaining
      const todoItems = await Todo.find();
      // counts documents inside the collection
      const itemsLeft = await Todo.countDocuments({ completed: false });
      // go to views to get todos.ejs, passes the above docs (todoItems, itemsLeft) into the file, and respond by rendering the html, reflecting the number of todos that are remaining
      res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      // go to models to find the Todo model, has Schema to create todo, finds todos collection in the db, and creates a new document with a todo property and a completed property
      await Todo.create({ todo: req.body.todoItem, completed: false });
      // logs "Todo has been added!" to the console
      console.log("Todo has been added!");
      // responds by refreshing the /todos page, reflecting the new todo added to the list (a GET request)
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      // go find the document in todos and update the document with the unique ID
      await Todo.findOneAndUpdate(
        // unique ID being passed from the front end via PUT request
        { _id: req.body.todoIdFromJSFile },
        {
          // change the status of the document with the above unique ID to true (completed)
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      // go find the document in todos and update the document with the unique ID
      await Todo.findOneAndUpdate(
        // unique ID being passed from the front end via PUT request
        { _id: req.body.todoIdFromJSFile },
        {
          // change the status of the document with the above unique ID to false (not completed)
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
