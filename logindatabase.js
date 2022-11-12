var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Login Mongoose Connected Succesfully !");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoos Finally Disconnected Ther Is'nt any Network");
  process.exit(1);
});

var loginSchema = new mongoose.Schema({
  email : String,
  password : String,
});
var LoginUserModel = mongoose.model("School Login Data Base", loginSchema);

module.exports = {
    LoginUserModel : LoginUserModel
}
