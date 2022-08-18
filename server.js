const express = require("express");
const app = express();
// imports for connection to the database (here, mongoose is handling the connection)
const connectDB = require("./config/database");
// import home.js from routes directory (catch what's exported from home.js, which is this case is the router in said file, so you can run code from home.js in server.js)
const homeRoutes = require("./routes/home");
// import todos.js from routes directory
const todoRoutes = require("./routes/todos");

require("dotenv").config({ path: "./config/.env" });

// allows for talking to the database
connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows for use of routes on the main page ('/' or localhost:2121)
// triggers homeRoutes above
app.use("/", homeRoutes);
// allows for use of routes on the todos page (localhost:2121/todos)
// triggers todoRoutes above
app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
