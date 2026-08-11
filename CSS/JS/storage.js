// ========================================
// NAMO BHARAT LOCAL STORAGE SYSTEM
// ========================================


// Get saved user name

function getUserName() {

    return localStorage.getItem("namoUserName") || "User";

}


// Get saved mobile number

function getUserMobile() {

    return localStorage.getItem("namoUserMobile") || "Mobile";

}


// Save user data

function saveUserData(name, mobile) {

    localStorage.setItem("namoUserName", name);

    localStorage.setItem("namoUserMobile", mobile);

}


// Get total tickets

function getTotalTickets() {

    return localStorage.getItem("totalTickets") || "0";

}


// Save total tickets

function saveTotalTickets(total) {

    localStorage.setItem("totalTickets", total);

}


// Get total journeys

function getTotalJourneys() {

    return localStorage.getItem("totalJourneys") || "0";

}


// Save total journeys

function saveTotalJourneys(total) {

    localStorage.setItem("totalJourneys", total);

}