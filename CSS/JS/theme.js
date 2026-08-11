// Dark Mode System


let button = document.getElementById("theme-toggle");


// Page load par theme check karega

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

}




// Button click

if(button){

button.onclick = function(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }
    else{

        localStorage.setItem("theme","light");

    }


}

}

