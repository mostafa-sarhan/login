
var inputEmail =document.getElementById("inputEmail");
var inputPassword =document.getElementById("inputPassword");
var button2Signup =document.getElementById("button2Signup");
var alert =document.getElementById("alert")

var person =[];
person = JSON.parse(localStorage.getItem("user"));


button2Signup.addEventListener("click",function(){
    for(var i =0 ; i< person.length ; i++){
        if(inputEmail.value == person[i].email && inputPassword.value == person[i].password ){
            console.log("Hello user");
            document.location.href="index.html";
            var name = person[i].name;
            localStorage.setItem("userName",name);
        }
        // }else{
        //     alert.classList.replace("d-none","d-block");
        // }

        // console.log(name);
        
    }
    // console.log("nn");
})


