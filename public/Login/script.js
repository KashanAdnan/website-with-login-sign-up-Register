
var port = "https://sir-web.herokuapp.com"


function login() {
    console.log("Hello");
    var obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    var Http = new XMLHttpRequest();
    Http.open("POST", port+ "/login");  
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        console.log(e)
        if (Http.readyState === 4) {
            let jsonRes = JSON.parse(Http.responseText);
            console.log(jsonRes)
            console.log(Http.status)
            if (Http.status === 200) {
               var email =  document.getElementById("email");
                var password =  document.getElementById("password");
                
                // alert(jsonRes.message)
                swal("Good job!", jsonRes.message, "success");
                setInterval(function () {
                    window.location.href="../Home/home.html"
                }, 4000)
                console.log(jsonRes.message)
            }else if(Http.status === 405){
                swal("Opps!", jsonRes.message, "error");
                console.log(jsonRes.message)
            } 
            else {
               
            }
        }
    }

    return false;
}




// var obj =[ {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// {
//     name :"ahmer ", 
//     class: "nine ",

// },
// ]
// var i =1;
// var newValue =obj.map((element)=>{
// // console.log(element);
// console.log(i++)
// console.log(element.name)
// console.log(element.class   )
// })
// console.log(newValue);
