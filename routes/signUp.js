const express = require("express");
const route = express.Router();
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

mW.post("/signup", (req, res, next) => {
  SignUpUserModel.findOne(
    {
      email: req.body.email,
    },
    (err, data) => {
      if (err || data) {
        if (data.email === req.body.email) {
          res.status(405).send({
            message: "Please Make Another Account User Already Exists !",
          });
          return;
        }
      } else {
        const saltRounds = 12;
        bycrypt.genSalt(saltRounds, function (err, salt) {
          bycrypt.hash(req.body.password, salt, function (err, hash) {
            var newSignUpPerson = SignUpUserModel({
              username: req.body.username,
              email: req.body.email,
              phone: req.body.phone,
              password: hash,
              confPassword: hash,
            });
            newSignUpPerson.save((err, data) => {
              if (!err) {
                console.log(data);
                res.status(200).send({
                  message: "Sign Up SuccesFull !",
                  data,
                });
                console.log(data);
              } else {
                res.status(405).send({
                  message: "User creation Failed",
                });
              }
            });
          });
        });
      }
    }
  );
});

app.use(mW); 
route.use(mW);
