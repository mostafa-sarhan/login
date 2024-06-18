//Selected

var inputName =document.getElementById("inputName");
var inputEmail =document.getElementById("inputEmail");
var inputPassword =document.getElementById("inputPassword");
var buttonSignup =document.getElementById("buttonSignup");
var paragraph =document.querySelector("#p-alert");
var inputForms =document.querySelectorAll(".form-control");
var alert_exist =document.getElementById("alert-exist")
var user =[];

// first reloaded of local storage

if(localStorage.getItem("user") != null){
    user = JSON.parse(localStorage.getItem("user"));
}

//Function That send A input Value to local storage

buttonSignup.addEventListener("click" ,function(){
    if(validation(inputName)&& 
    validation(inputEmail) && 
    validation(inputPassword)){
        if(inputName.previousElementSibling.classList.contains("d-block")){
            inputName.previousElementSibling.classList.replace("d-block","d-none");
        }
        var  object = {
            name:inputName.value,
            email:inputEmail.value,
            password:inputPassword.value
        }
        if(emailExist() == true ){
            // ALert
            alert_exist.classList.replace("d-none","d-block")
        }else{
            user.push(object);
            localStorage.setItem("user",JSON.stringify(user));
            // window.location.href="login.html";
            clearValidation()
            clear();
        }
    }else {
        inputName.previousElementSibling.classList.replace("d-none","d-block");
    }
});

// Function To Clear All input

function clear(){
    inputName.value=null;
    inputEmail.value=null;
    inputPassword.value = null;
}

// function to call a validation when user keyup

for(var i=0 ; i<inputForms.length ; i++){
    inputForms[i].addEventListener("keyup", function(){
        validation (this);
    })
}


// Function To Mke Validation to All input

function validation (element){
    

    var regex = {
        inputName:/^[A-Z][a-z]{2,8}$/,
        inputEmail:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        inputPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    }
    // element=inputName;
    // console.log(regex[element.id]);
    if(regex[element.id].test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        if(paragraph.classList.contains("d-block")){
            paragraph.classList.replace("d-block", "d-none");
        }
        return true ;

    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        paragraph.classList.replace("d-none", "d-block");
        return false ;
    }
}

// The Function To remove the icon invalid after register

function clearValidation(){
    for(var i =0 ; i <inputForms.length ;i++){
        inputForms[i].classList.remove("is-valid")
    }
}



function emailExist(){
    for(var i =0 ; i<user.length ; i++){
        if(user[i].email == inputEmail.value){
            return true ;
        }
    }
}