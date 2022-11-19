// const stdName = document.getElementById("stdname")
// const email = document.getElementById("email")
// const age = document.getElementById("age")
// const contact = document.getElementById("contact")
// const nation = document.getElementById("nation")
// const birthdate = document.getElementById("birthdate")
// const placebirth = document.getElementById("placebirth")
// const level = document.getElementById("level");

function post() {
var headpost = document.getElementById("headpost").value;
//  var parapost = document.getElementById("parapost").value;
console.log(headpost)
// console.log(parapost)
var local = localStorage.setItem('headpost', headpost);

console.log(local)

}
