const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("dotenv/config");

const application = path.join(__dirname, "/../client/public");
app.use(express.static(application));
console.log(application);
//Middlewares

app.use(express.json());
app.use(cors());
// Import Routes
const postRoute = require("./routes/posts");

app.use("/api/posts", postRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We're home");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

// Listen for this port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
