// using express to build API
const express = require("express");
// allows to use express
const app = express();
// imports for connection to the database (here, mongoose is handling the connection)
// go to config folder then database file
const connectDB = require("./config/database");
// import home.js from routes directory (catch what's exported from home.js, which is this case is the router in said file, so you can run code from home.js in server.js)
const homeRoutes = require("./routes/home");
// import todos.js from routes directory
const todoRoutes = require("./routes/todos");

// listen for env variables and know how to use .env and where to find it
require("dotenv").config({ path: "./config/.env" });

// allows for talking to the database; call connectDB function that's spit out of the database.js file
connectDB();

// using .ejs as view engine
app.set("view engine", "ejs");
// set up public folder to use
app.use(express.static("public"));
// replace body parser: parse data that comes out of the body (get data out of the big information dump (request) that's needed)
app.use(express.urlencoded({ extended: true }));
// JSON used to parse incoming data
app.use(express.json());

// allows for use of routes on the main page ('/' or localhost:2121)
// triggers homeRoutes above
app.use("/", homeRoutes);
// allows for use of routes on the todos page (localhost:2121/todos)
// triggers todoRoutes above
app.use("/todos", todoRoutes);

// starts the server and designates where the server listens
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
