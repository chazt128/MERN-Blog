const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== "production";
const localDB = "mongodb://localhost:27017/blog-posts";
require("dotenv/config");

// const application = path.join(__dirname, "/../client/public");
// app.use(express.static(application));
// console.log(application);

// Middlewares
app.use(express.json());
app.use(cors());

// Import Routes
const postRoute = require("./routes/posts");

app.use("/api/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We're home");
});

// DB config
let dbConfig = isDev ? localDB : process.env.DB_CONNECTION;
mongoose.connect(dbConfig, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

// Listen for this port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
