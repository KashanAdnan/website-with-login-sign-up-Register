function admit() {
    const admission_Obj = {
        stDname: document.getElementById("stDname").value,
        email: document.getElementById("email").value,
        contactno: document.getElementById("contactno").value,
        nationality: document.getElementById("nation").value,
        brithDate: document.getElementById("Dirthdate").value,
        placeofbirth: document.getElementById("placeofbirth").value,
        level: document.getElementById("level").value
    }

    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest;

    Http.open("POST", "http://localhost:3000" + "/admission");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(admission_Obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText);
            console.log(Http.status)
            if (Http.status === 200) {
                alert(jsonRes.message);
            } else {
                alert(jsonRes.message);
            }
        }
    }

    
    return false;
}
