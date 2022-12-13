// const express = require("express");
// const Swal  = require("sweetalert2");
// const app = express();

const url = "https://sir-web.herokuapp.com";
// const url = "http://localhost:3000"

function getData() {
  var showdata = document.getElementById("showdata");
  const Http = new XMLHttpRequest();
  Http.open("GET", url + "/admin");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(null);
  Http.onreadystatechange = (e) => {
    console.log(e);
    if (Http.readyState === 4) {

        let jsonRes = JSON.parse(Http.responseText);
        console.log(jsonRes)
        let out;
        var i = 1;
        jsonRes.map((data) => {
          console.log(data) 

          out = `
                        <tr>
                        <td>${i++}</td>
                        <td>${data.username}</td>
                        <td>${data.email}</td>
                        <td>${data.phone}</td>
                        </tr>
                        `;
          showdata.innerHTML += out;
        });
    
    }
  };
  console.log("hello");
}
getData();
