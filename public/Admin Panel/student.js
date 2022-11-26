// const express = require("express");
// const Swal  = require("sweetalert2");
// const app = express();

var port = "http://localhost:3000";
const signupdata = () => {
  const Http = new XMLHttpRequest();
  Http.open("GET", port + "/signupdata");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(null);
  var showdata = document.getElementById("showdata");
  Http.onreadystatechange = (e) => {
    console.log(e);
    if (Http.readyState === 4) {
      if (Http.status === 200) {
        var jsonRes = JSON.parse(Http.responseText);
        console.log(jsonRes)
        var i = 1
        let out;
        jsonRes.map(data =>{
            console.log(data)
            out = `
            <tr>
            <td>${i++}</td>
            <td>${data.username}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            </tr>

            `
            showdata.innerHTML += out
        })
      }
    }
  };

  return false;
};
signupdata()