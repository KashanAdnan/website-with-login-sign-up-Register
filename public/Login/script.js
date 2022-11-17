
var port = "http://localhost:3000" || "https://sir-web.herokuapp.com"


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
                alert(jsonRes.message)
                console.log(jsonRes.message)
                location.replace("http://localhost:3000/home.html");
            }else if(Http.status === 405){
                alert(jsonRes.message);
                console.log("nahee mil raha")
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
