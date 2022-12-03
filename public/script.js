var port = "https://sir-web.herokuapp.com"
// var port = "http://localhost:3000"/
const sinup = () => {
    var obj = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
        confPassword: document.getElementById("confirm-password").value,
    }

    const Http = new XMLHttpRequest();
    Http.open("POST", port + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                var loginemail = document.getElementById("email");
                var loginuser = document.getElementById("username");
                var loginphone = document.getElementById("phone");
                var loginpasss = document.getElementById("password");
                var loginconpass = document.getElementById("confirm-password");
                localStorage.setItem('username' , loginuser.value);
                localStorage.setItem('email' , loginemail.value);
                
                var jsonRes = JSON.parse(Http.responseText);
                if (loginuser.value === null) {
                    swal("Opps!", "***Please Fill User Input !", "error");
                }
                else if (loginemail.value === null) {
                    swal("Opps!", "***Please Fill Email Input !", "error");
                }
                else if (loginpasss.value === null) {
                    swal("Opps!", "***Please Fill Password Input !", "error");
                }
                else if (loginpasss.value < 8 && loginconpass.value < 8) {
                    swal("Opps!", "***The Password Must Be 8 Character !", "error");
                }
                
                else if (loginphone.value === null) {
                    swal("Opps!", "***Please Fill Pho Input !", "error");
                }
                else if (loginconpass.value !== loginpasss.value) {
                    swal("Opps!", "***Please Match the Password & Confirm Passwor Input !", "error");
                } 
                else {
                    console.log(jsonRes.message)
                    swal("Good job!", jsonRes.message, "success");
                    setInterval( () => {
                        window.location.href="../Login/login.html"
                    }, 3000)
                }
            }
            else {
                swal("Opps!", jsonRes.message, "error");
                // console.log(jsonRes.data)
                window.location.reload()
            }
        }
    }
    
    
    return false;
}
