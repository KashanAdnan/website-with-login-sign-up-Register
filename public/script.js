const username = localStorage.getItem('name');
var displayname = document.getElementById("name")
displayname.innerHTML = "" + username + "'s  Account";
console.log(displayname)
console.log(username)