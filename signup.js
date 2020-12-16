var username = document.getElementById("username");
username.addEventListener("click",function(){
    username.style.backgroundColor = "black";
    username.style.color = "white";
    
});
var password1 = document.getElementById("password1");
password1.addEventListener("click",function(){
    password1.style.backgroundColor = "black";
    password1.style.color = "white";
});
var password2 = document.getElementById("password2");
password2.addEventListener("click",function(){
    password2.style.backgroundColor = "black";
    password2.style.color = "white";
});
var b3 = document.getElementById("b3");
b3.addEventListener("click",function(){
    password1.style.backgroundColor = "black";
    password2.style.backgroundColor = "black";
    username.style.backgroundColor = "black";
    password1.style.color = "white";
    password2.style.color = "white";
    username.style.color = "white";
});
var b1 = document.getElementById("login");
b1.addEventListener("click",function(){
    b1.getAttribute("href");
    b1.setAttribute("href","index.html")
});
var b2 = document.getElementById("signup");
b2.addEventListener("click",function(){
    b12.getAttribute("href");
    b2.setAttribute("href","signup.html")
});




