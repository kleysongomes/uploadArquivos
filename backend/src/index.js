const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

/**
 * Database setupp
 */
mongoose.connect("mongodb://localhost:27017/upload",
  {
    usenewUrlParser: true,
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

app.use(require("./routes"));

app.listen(3001);