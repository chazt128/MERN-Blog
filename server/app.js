const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// DB config
require("./config");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import Routes
const postRoute = require("./routes/posts");

app.use("/api/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Journaling can be fun!");
});

// Listen for this port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
