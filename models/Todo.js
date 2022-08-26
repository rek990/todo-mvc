// import mongoose
const mongoose = require("mongoose");

// creating mongoose.Schema (model) called TodoSchema for specific structure in MongoDB db
// this schema is the template for what goes into the MongoDB db
// schema  maps through the 'todos' collection
const TodoSchema = new // data in our db Schema (info in the documents)
// in this case, the documents have a todo property and a completed property
mongoose.Schema({
  // actual text of the todo
  todo: {
    // data type
    type: String,
    required: true,
  },
  // whether or not todo was completed
  completed: {
    // data type
    type: Boolean,
    required: true,
  },
});

// exporting model, giving us ability to talk to said model as part of the db
// instance of model is a document (TodoSchema)
// enables us to create and read data going into MongoDB
module.exports = mongoose.model("Todo", TodoSchema);
