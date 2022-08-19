// import mongoose module
const mongoose = require("mongoose");

// function enables to connect to DB using mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// exported function that connects us to our database (must be imported in other file)
module.exports = connectDB;
