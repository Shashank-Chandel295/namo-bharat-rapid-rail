// Namo Bharat Language Switch System


let hindiMode = false;



function changeLanguage(){


hindiMode = !hindiMode;



// HINDI MODE

if(hindiMode){



// Dashboard

if(document.getElementById("app-title"))
document.getElementById("app-title").innerHTML="नमो भारत";


if(document.getElementById("app-subtitle"))
document.getElementById("app-subtitle").innerHTML="रैपिड रेल";


if(document.getElementById("dashboard-text"))
document.getElementById("dashboard-text").innerHTML="डैशबोर्ड";


if(document.getElementById("book-text"))
document.getElementById("book-text").innerHTML="टिकट बुक करें";


if(document.getElementById("route-text"))
document.getElementById("route-text").innerHTML="रूट";


if(document.getElementById("schedule-text"))
document.getElementById("schedule-text").innerHTML="समय सारणी";


if(document.getElementById("ticket-text"))
document.getElementById("ticket-text").innerHTML="मेरे टिकट";


if(document.getElementById("profile-text"))
document.getElementById("profile-text").innerHTML="प्रोफाइल";



if(document.getElementById("welcome-text"))
document.getElementById("welcome-text").innerHTML=
"नमो भारत रैपिड रेल में आपका स्वागत है";






// Booking Page


if(document.getElementById("booking-title"))
document.getElementById("booking-title").innerHTML=
"टिकट बुक करें 🚆";



if(document.getElementById("booking-subtitle"))
document.getElementById("booking-subtitle").innerHTML=
"नमो भारत स्मार्ट बुकिंग सिस्टम";



if(document.getElementById("journey-text"))
document.getElementById("journey-text").innerHTML=
"यात्रा विवरण";



if(document.getElementById("from-text"))
document.getElementById("from-text").innerHTML=
"कहाँ से";



if(document.getElementById("to-text"))
document.getElementById("to-text").innerHTML=
"कहाँ तक";



if(document.getElementById("date-text"))
document.getElementById("date-text").innerHTML=
"यात्रा तारीख";



if(document.getElementById("passenger-text"))
document.getElementById("passenger-text").innerHTML=
"यात्री";



if(document.getElementById("class-text"))
document.getElementById("class-text").innerHTML=
"क्लास चुनें";



if(document.getElementById("standard-text"))
document.getElementById("standard-text").innerHTML=
"सामान्य";


if(document.getElementById("premium-text"))
document.getElementById("premium-text").innerHTML=
"प्रीमियम";


if(document.getElementById("fare-text"))
document.getElementById("fare-text").innerHTML=
"कुल किराया";


if(document.getElementById("calculate-text"))
document.getElementById("calculate-text").innerHTML=
"किराया Calculate करें";



}






// ENGLISH MODE

else{



if(document.getElementById("app-title"))
document.getElementById("app-title").innerHTML=
"NAMO BHARAT";



if(document.getElementById("app-subtitle"))
document.getElementById("app-subtitle").innerHTML=
"Rapid Rail";



if(document.getElementById("dashboard-text"))
document.getElementById("dashboard-text").innerHTML=
"Dashboard";



if(document.getElementById("book-text"))
document.getElementById("book-text").innerHTML=
"Book Ticket";



if(document.getElementById("route-text"))
document.getElementById("route-text").innerHTML=
"Routes";



if(document.getElementById("schedule-text"))
document.getElementById("schedule-text").innerHTML=
"Schedule";



if(document.getElementById("ticket-text"))
document.getElementById("ticket-text").innerHTML=
"My Tickets";



if(document.getElementById("profile-text"))
document.getElementById("profile-text").innerHTML=
"Profile";



if(document.getElementById("welcome-text"))
document.getElementById("welcome-text").innerHTML=
"Welcome back to Namo Bharat Rapid Rail";







// Booking English


if(document.getElementById("booking-title"))
document.getElementById("booking-title").innerHTML=
"Book Your Journey 🚆";



if(document.getElementById("booking-subtitle"))
document.getElementById("booking-subtitle").innerHTML=
"Namo Bharat Rapid Rail Smart Booking";



if(document.getElementById("journey-text"))
document.getElementById("journey-text").innerHTML=
"Journey Details";



if(document.getElementById("from-text"))
document.getElementById("from-text").innerHTML=
"From Station";



if(document.getElementById("to-text"))
document.getElementById("to-text").innerHTML=
"To Station";



if(document.getElementById("date-text"))
document.getElementById("date-text").innerHTML=
"Journey Date";



if(document.getElementById("passenger-text"))
document.getElementById("passenger-text").innerHTML=
"Passengers";



if(document.getElementById("class-text"))
document.getElementById("class-text").innerHTML=
"Select Class";



if(document.getElementById("standard-text"))
document.getElementById("standard-text").innerHTML=
"Standard";



if(document.getElementById("premium-text"))
document.getElementById("premium-text").innerHTML=
"Premium";



if(document.getElementById("fare-text"))
document.getElementById("fare-text").innerHTML=
"Total Fare";



if(document.getElementById("calculate-text"))
document.getElementById("calculate-text").innerHTML=
"Calculate Fare & Continue";



}



}