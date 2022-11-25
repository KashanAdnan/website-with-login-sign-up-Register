var express = require("express");
var fs = require("fs");
var http = require("http");
var color = require("colors");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const { SignUpUserModel } = require("./signupdatabase");
const { AdmissionUserModel } = require("./admissiondatbase");
const path = require("path");
const port = process.env.PORT;
const bycrypt = require("bcryptjs");

const monogoClient = require("mongodb").MongoClient;

var adminObj = {
  email: "admin@gmail.com",
  password: "admin1278",
};

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

app.post("/signup", (req, res, next) => {
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

app.post("/login", (req, res, next) => {
  SignUpUserModel.findOne(
    {
      email: req.body.email,
    },
    (err, data) => {
      // console.log(data.email)
      bycrypt.compare(req.body.password, data.password, (err, isFound) => {
        // console.log(data.password);
        // console.log(req.body.password);
        // console.log(isFound);
        if (isFound) {
          res.status(200).send({
            message: "Successfully login  !",
          });
        } else if (
          data.email === adminObj.email &&
          data.password === adminObj.password
        ) {
          res.status(200).send({
            message: "Going To Admin Page Please Wait .............",
          });
          window.location.href = "./public/Admin Panel/index.html";
        } else {
          res.status(405).send({
            message: "User Not Exits Please Sign Up !",
          });
        }
      });
    }
  );
});

app.post("/admission", (req, res, next) => {
  // AdmissionUserModel.findOne(
  //   {
  //     email: req.body.email,
  //   },
  //   (err, data) => {
  //     if (data.email === req.body.email) {
  //       res.status(405).send({
  //         message: "User Already Exits Please Change Your Email ID !",
  //       });
  //     } else {
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
  //     }
  //   }
  // );
});

app.get("/admin", (req, res) => {
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
app.get("/signupdata", (req, res) => {
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

app.listen(port, () => {
  console.log("Server is Running On PORT Number : ", port);
});
