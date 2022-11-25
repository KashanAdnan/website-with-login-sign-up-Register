function admit() {
    var obj = {
        stDname : document.getElementById("username").value,
        email : document.getElementById("email").value,
        age : document.getElementById("age").value,
        contactno : document.getElementById("phone").value,
        nationality : document.getElementById("nation").value,
        placeofbirth : document.getElementById("placeofbirth").value,
        adress : document.getElementById("adress`").value,
        level : document.getElementById("level").value
    }
    var Http = new XMLHttpRequest();
    var port =  "https://sir-web.herokuapp.com" ;
    Http.open("POST", "https://sir-web.herokuapp.com" +"/admission");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            console.log(Http.status)
            var jsonRes = JSON.parse(Http.responseText);
            if (Http.status === 200) {
                swal("Good job!", jsonRes.message, "success");
            } else {
                swal("Opps!", jsonRes.message, "error");
            }
        }
    }

    
    return false;
}
