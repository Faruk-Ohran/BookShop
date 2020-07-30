const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
require("dotenv").config();

const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || process.env.POORT;

// Bodyparser middleware sve dodano
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use("/books/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport middleware
app.use(passport.initialize());
//Passport config
require("./config/passport")(passport);

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT);
