var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Admission Mongoose Connected Succesfully !");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoos Finally Disconnected Ther Is'nt any Network");
  process.exit(1);
});

var admissionSchema = new mongoose.Schema({
    stDname : String,
    email : String,
    age : String,
    brithDate : String,
    nationality : String,
    religion : String,
    nameOfFather : String,
    nameOfMother : String,
    contactno : Number
});
var AdmissionUserModel = mongoose.model("School Admission Data Base", admissionSchema);

module.exports = {
    AdmissionUserModel : AdmissionUserModel
}
