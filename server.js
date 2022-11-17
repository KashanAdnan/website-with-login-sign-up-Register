var express = require("express");
var fs = require("fs");
var http = require("http");
var color = require("colors");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const { SignUpUserModel } = require("./signupdatabase")
const { AdmissionUserModel } = require("./admissiondatbase")
const path = require("path");
var port = 3000;

app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.json());
app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

app.post("/signup", (req, res, next) => {
  SignUpUserModel.findOne({ email: req.body.email }, (err, data) => {
    if (err || data) {
      res.status(405).send({
        message: "Please Make Another Account User Already Exists !",
      });
    } else {

      var newSignUpPerson = SignUpUserModel({
        "username": req.body.username,
        "email": req.body.email,
        "phone": req.body.phone,
        "password": req.body.password,
        "confPassword": req.body.confPassword,
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
    }
  });
});


app.post("/login", (req, res, next) => {
  SignUpUserModel.findOne({ email: req.body.email }, (err, data) => {
    if (data.email === req.body.email && data.password === req.body.password) {

      res.status(200).send({
        message: "Successfully login  !"
      });

    }
    else {
      res.status(405).send({
        message: "User Not Exits !"
      });
    }
  })
});



app.post("/admission", (req, res, next) => {

  AdmissionUserModel.findOne({ email: req.body.email }, (err, data) => {
    if (!err) {
      
      if (data.email === req.body.email) {
        res.status(405).send({
          message: "This Email Is Verified Already !"
        });
      } 
    }
    else {
      var newAdmissionPerson = AdmissionUserModel({
        "stDname": req.body.stDname,
        "email": req.body.email,
        "contactno": req.body.contactno,
        "adress": req.body.brithDate,
        "nationality": req.body.nationality,
        "birthDate": req.body.religion,
        "placeofBIrth": req.body.nameOfFather,
        "level": req.body.nameOfMother,
      });
      newAdmissionPerson.save((err, data) => {
        if (!err) {
          console.log(data);
          res.status(200).send({
            message: "Welcome " + req.body.stDname,
            data,
          });
          console.log(data);
        } else {
          res.status(405).send({
            message: "User creation Failed",
          });
        }
      });
    }
  })
});

app.listen(port, () => {
  console.log("server is running on", port);
});

