var userName = document.getElementById("userName");
var logout =document.getElementById("logout");


userName.innerHTML=localStorage.getItem("userName");




logout.addEventListener("click",function(){
    document.location.href="login.html";
    localStorage.removeItem("userName");
})