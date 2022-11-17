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
        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText);
            if (Http.status === 200) {
                alert(jsonRes.message)
                // window.location.reload()
                // location.replace("http://localhost:3000/in.html");
                // var loginemail = document.getElementById("email");
                // var loginuser = document.getElementById("username");
                // var loginphone = document.getElementById("phone");
                // var loginpasss = document.getElementById("password");
                // var loginconpass = document.getElementById("confirm-password");

                // if (loginuser.value === ' ') {
                //     alert("***Please Fill User   Input !")
                // }
                // else if (loginemail.value === ' ') {
                //     alert("***Please Fill Email Input !")
                // }
                // else if (loginpasss.value === ' ') {
                //     alert("***Please Fill Password Input !")
                // }
                // else if (loginconpass.value === ' ') {
                //     alert("***Please Fill Password Input !")
                // }
                // else if (loginpasss.value < 8 && loginconpass.value < 8) {
                //     alert("***The Password Must Be 8 Character !")
                // }

                // else if (loginphone.value === ' ') {
                //     alert("***Please Fill Phone Input !")
                // }
                // else if (loginconpass.value !== loginpasss.value) {
                //     alert("***Please Match the Password & Confirm Password  Input !")
                // }


                // localStorage.setItem('name', loginuser.value)
            }
            else {
                alert(jsonRes.message)
                // window.location.reload()
            }
        }
    }


    return false;
}
