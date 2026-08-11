// Mobile Menu Toggle


let menuBtn =
document.getElementById("menu-toggle");


let sidebar =
document.querySelector(".sidebar");



if(menuBtn){


menuBtn.onclick=function(){


sidebar.classList.toggle("active");


}


}