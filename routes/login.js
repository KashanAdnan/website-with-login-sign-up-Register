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

router.post("/login", (req, res, next) => {
  SignUpUserModel.findOne({ email: req.body.email }, (err, data) => {
    if (
      req.body.email !== "admin@gmail.com" ||
      req.body.password !== "admin11"
    ) {
      bycrypt.compare(req.body.password, data.password, (err, isFound) => {
        if (isFound) {
          res.status(200).send({
            message: "Successfully login  !",
          });
        } else {
          res.status(405).send({
            message: "User Not Exits Please Sign Up !",
          });
        }
      });
    } else {
      res.status(201).send({
        message: "Verifying Your Email ID",
        adminmess: "ID Correct Going To Admin Page ! ",
      });
    }
  });
});
