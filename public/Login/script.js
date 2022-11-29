var port = "https://sir-web.herokuapp.com";

function login() {
  var obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  var Http = new XMLHttpRequest();
  Http.open("POST", port + "/login");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        swal("Good job!", jsonRes.message, "success");
        setInterval(function () {
          window.location.href = "../Home/home.html";
        }, 4000);
        console.log(jsonRes.message);
      } else if (Http.status === 201) {
        swal("Good job!", jsonRes.message, "success");
        swal("Good job!", jsonRes.adminmess, "success");
        setInterval(function () {
          window.location.href = "../Admin Panel/index.html";
        }, 4000);
      } else if (Http.status === 405) {
        swal("Opps!", jsonRes.message, "error");
        console.log(jsonRes.message);
      }
    }
  };

  return false;
}
