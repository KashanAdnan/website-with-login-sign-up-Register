const sinup = () =>{
    var obj ={
        email:document.getElementById("email").value,
        username:document.getElementById("username").value,
        phone:document.getElementById("phone").value,
        password:document.getElementById("password").value,
        confPassword:document.getElementById("confirm-password").value,
    }
    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest();

    Http.open("POST",  "http://localhost:3000" + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText);
            console.log(jsonRes)
            if (jsonRes.status === 200) {
                 var confim =confirm(jsonRes.message);
                 if (confim === yes) {
                    window.location.href = "http://localhost:3000/login.html"
                 }
            } else {
                var confim =confirm(jsonRes.message);
                 if (confim === yes) {
                    window.location.href = "http://localhost:3000/login.html"
                 }
            }
        }
    }
    return false;
}