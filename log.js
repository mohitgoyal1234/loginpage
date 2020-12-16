var username = document.getElementById("username");
username.addEventListener("click",function(){
    username.style.backgroundColor = "black";
    username.style.color = "white";
    
});
var password = document.getElementById("password");
password.addEventListener("click",function(){
    password.style.backgroundColor = "black";
    password.style.color = "white";
});
var b3 = document.getElementById("b3");
b3.addEventListener("click",function(){
    password.style.backgroundColor = "black";
    username.style.backgroundColor = "black";
    password.style.color = "white";
    username.style.color = "white";
});
var b1 = document.getElementById("b1");
b1.addEventListener("click",function(){
    b1.innerHTML = document.getElementById("login").href;
});
var b2 = document.getElementById("b2");
b2.addEventListener("click",function(){
    b2.innerHTML = document.getElementById("signup").href;
});

