var port = "http://localhost:3000" || "https://sir-web.herokuapp.com"
const find = () => {
    const Http = new XMLHttpRequest();
    Http.open("GET", port + "/home");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(null)
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                let jsonRes = JSON.parse(Http.responseText);
                console.log(jsonRes);
                var displayusername = document.getElementById("username").innerHTML = jsonRes.username;
                var displayemail = document.getElementById("email").innerHTML = jsonRes.email;
            }
        }
    }
    return false;
}
find();