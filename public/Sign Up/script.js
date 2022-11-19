// const express = require("express");
// const Swal  = require("sweetalert2");
// const app = express();

var port = "http://localhost:3000" || "https://sir-web.herokuapp.com"
const sinup = () => {
    var obj = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
        confPassword: document.getElementById("confirm-password").value,
    }
    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest();

    Http.open("POST", port + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        // console.log(e)
        let jsonRes = JSON.parse(Http.responseText);
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                swal("Good job!", jsonRes.message, "success");
                window.location.reload()
                location.replace("http://localhost:3000/");
                var loginemail = document.getElementById("email");
                var loginuser = document.getElementById("username");
                var loginphone = document.getElementById("phone");
                var loginpasss = document.getElementById("password");
                var loginconpass = document.getElementById("confirm-password");

                if (loginuser.value === ' ') {
                    swal("Opps!", "***Please Fill User Input !", "error");
                }
                else if (loginemail.value === ' ') {
                    swal("Opps!", "***Please Fill Email Input !", "error");
                }
                else if (loginpasss.value === ' ') {
                    swal("Opps!", "***Please Fill Password Input !", "error");
                }
                else if (loginpasss.value < 8 && loginconpass.value < 8) {
                    swal("Opps!", "***The Password Must Be 8 Character !", "error");
                }
                
                else if (loginphone.value === ' ') {
                    swal("Opps!", "***Please Fill Pho Input !", "error");
                }
                else if (loginconpass.value !== loginpasss.value) {
                    swal("Opps!", "***Please Match the Password & Confirm Passwor Input !", "error");
                }
            }
            else {
                swal("Opps!", jsonRes.message, "error");
                // window.location.reload()
            }
        }
    }


    return false;
}
