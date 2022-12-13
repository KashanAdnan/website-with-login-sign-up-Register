var port = "https://sir-web.herokuapp.com";
// var port = "http://localhost:3000";
const sinup = () => {
  var obj = {
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    confPassword: document.getElementById("confirm-password").value,
  };

  const Http = new XMLHttpRequest();
  Http.open("POST", port + "/signup");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    console.log(e);
    if (Http.readyState === 4) {
      var jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes.message);
        swal("Good job!", jsonRes.message, "success");
        setInterval(() => {
          window.location.href = "./Login/login.html";
        }, 3000);
      } else if(Http.status === 409){
        swal("Opps!", jsonRes.message, "error");
      }
    }
  };

  return false;
};
