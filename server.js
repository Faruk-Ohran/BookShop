const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
//dodano
const bodyParser = require("body-parser");

const passport = require("passport");

const app = express();
const PORT = process.env.PORT || process.env.POORT;

const routes = require("./routes/api");

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

// app.use(express.static("public"));
// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use(express.session({ secret: "keyboard cat" }));
// app.use(passport.initialize());
// require("./config/passport")(passport);
// app.use(passport.session());
// app.use(app.router);

//Passport middleware
app.use(passport.initialize());
//Passport config
require("./config/passport")(passport);

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT);
