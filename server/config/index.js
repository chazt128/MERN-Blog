const mongoose = require("mongoose");
const isDev = process.env.NODE_ENV !== "production";
const localDB = "mongodb://localhost:27017/blog-posts";
require("dotenv/config");

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};

let url = !isDev ? localDB : process.env.DB_CONNECTION;

mongoose
  .connect(url, options)
  .then(() => {
    console.log("Database connection established!");
  })
  .catch(err =>
    console.log("Error connecting Database instance due to: ", err)
  );
