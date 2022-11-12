function admit() {
    const admission_Obj = {
        stDname: document.getElementById("stDname").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        brithDate: document.getElementById("birthDate").value,
        nationality: document.getElementById("nationality").value,
        religion: document.getElementById("religion").value,
        nameOfFather: document.getElementById("nameOfFather").value,
        nameOfMother: document.getElementById("nameOfMother").value,
        contactno: document.getElementById("contactno").value,
    }

    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/admission");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(admission_Obj));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            
            let jsonRes = JSON.parse(Http.responseText);

            if (jsonRes.status === 200) {
                alert(jsonRes.message);
            } else {
                alert(jsonRes.message);
            }
        }
    }
    return false;

}