const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
var displayusername = (document.getElementById("username").innerHTML =
  username);
var displayemail = (document.getElementById("email").innerHTML = email);
