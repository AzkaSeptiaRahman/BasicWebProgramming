let barmenu = document.getElementById("barmenu");
let navbar = document.getElementById("nav-bar");
barmenu.addEventListener("click",function(){
    navbar.style.transform = "translate(0%)";
})

let closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", function(){
    navbar.style.transform="translate(100%)";
})


    
