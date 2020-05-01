const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || process.env.POORT;

const routes = require("./routes/api");

mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT);
