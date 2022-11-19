function admit() {
    var addobj = {
        stDname : document.getElementById("username").value,
        email : document.getElementById("email").value,
        age : document.getElementById("age").value,
        contactno : document.getElementById("phone").value,
        nationality : document.getElementById("nation").value,
        brithDate : document.getElementById("Birthdate").value,
        placeofbirth : document.getElementById("placeofbirth").value,
        level : document.getElementById("level").value
    }
    var Http = new XMLHttpRequest;
    Http.open("POST",  "http://localhost:3000" + "/admission");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(addobj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            console.log(Http.status)
            let jsonRes = JSON.parse(Http.responseText);
            if (Http.status === 200) {
                swal("Good job!", jsonRes.message, "success");
                // location.reload();
            } 
            else {
                // alert(jsonRes.message);
                swal("Opps!", jsonRes.message, "error");
                console.log(jsonRes.message)
            }
        }
    }

    
    return false;
}
