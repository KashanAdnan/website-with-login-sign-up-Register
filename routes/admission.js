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

router.post("/admission", (req, res, next) => {
  AdmissionUserModel.findOne({ email: req.body.email }, (err, data) => {
    if (err || data) {
      if (data.email === req.body.email) {
        res.status(405).send({
          message: "User Already Exists Please Make Another Email ID !",
        });
      }
    } else {
      var newAdmissionPerson = AdmissionUserModel({
        stDname: req.body.stDname,
        age: req.body.age,
        email: req.body.email,
        contactno: req.body.contactno,
        adress: req.body.adress,
        nationality: req.body.nationality,
        placeofBIrth: req.body.placeofBIrth,
        level: req.body.level,
      });
      newAdmissionPerson.save((err, data) => {
        if (!err) {
          res.status(200).send({
            message: "Your Form Has Been Submitted  !",
            data,
          });
        } else {
          res.status(405).send({
            message: "User creation Failed",
          });
        }
      });
    }
  });
});
