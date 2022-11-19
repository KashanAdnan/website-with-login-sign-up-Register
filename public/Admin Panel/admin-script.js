// const express = require("express");
// const Swal  = require("sweetalert2");
// const app = express();

const url = "http://localhost:3000" || "https://sir-web.herokuapp.com"
function getData() {
    var display = document.getElementById("alldata");


    const Http = new XMLHttpRequest();
    Http.open("GET", url + "/admin");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(null)
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                let jsonRes = JSON.parse(Http.responseText);
                jsonRes.map(data =>{
                    console.log(data);
                    display.innerHTML += `<tr>${data.stDname}  </tr> <br />` 
                })
            }
        }
    }
    console.log("hello")

}
getData();  