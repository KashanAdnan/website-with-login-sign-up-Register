// const express = require("express");
// const Swal  = require("sweetalert2");
// const app = express();

const url = "http://localhost:3000" || "https://sir-web.herokuapp.com"
function getData() {
    
    var showdata = document.getElementById("showdata");
    const Http = new XMLHttpRequest();
    Http.open("GET", url + "/admin");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(null)
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                let jsonRes = JSON.parse(Http.responseText);
                let out;
                var i = 1;
                jsonRes.map(data =>{
                        out  = `
                        <tr>
                        <td>${i++}</td>
                        <td>${data.stDname}</td>
                        <td>${data.email}</td>
                        <td>${data.age}</td>
                        <td>${data.contactno}</td>
                        <td>${data.nationality}</td>
                        <td>${data.placeofBIrth}</td>
                        <td>${data.level}</td>
                        </tr>
                        `
                        showdata.innerHTML += out;
                
                })
            }
        }
    }
    console.log("hello")

}
getData();  