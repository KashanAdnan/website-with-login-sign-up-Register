function login() {
    console.log("Hello");
    var obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    var Http = new XMLHttpRequest();
    Http.open("POST", "http://localhost:3000" + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText);
            console.log(jsonRes)
            if (jsonRes.status === 200) {
                alert(jsonRes.message)
            } else {
                alert(jsonRes.message)
            }
        }
    }

    return false;
}