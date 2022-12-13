const express = require("express");
const router = express.Router();
var fs = require("fs");
var http = require("http");
var color = require("colors");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const { SignUpUserModel } = require("../signupdatabase");
const { AdmissionUserModel } = require("../admissiondatbase");
const path = require("path");
const bycrypt = require("bcryptjs");
const monogoClient = require("mongodb").MongoClient;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

router.get("/admin", (req, res) => {
  monogoClient.connect(
    "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      var database = data.db("test");
      console.log("Connection Succesfull !");
      database
        .collection("school admission data bases")
        .find({})
        .toArray((error, db) => {
          if (error) {
            throw error;
          }
          res.send(db);
        });
    }
  );
});
