// ========================================
// NAMO BHARAT NOTIFICATION SYSTEM
// ========================================


// Notification Button

const notificationBtn =
document.getElementById("notification-btn");


// Notification Panel

const notificationPanel =
document.getElementById("notification-panel");


// Notification Count

const notificationCount =
document.getElementById("notification-count");




// Open / Close Notification Panel

if(notificationBtn){

    notificationBtn.onclick = function(){

        notificationPanel.classList.toggle("show");

    };

}



// Mark all notifications as read

const clearNotifications =
document.getElementById("clear-notifications");


if(clearNotifications){

    clearNotifications.onclick = function(){

        notificationCount.innerText = "0";

        notificationCount.style.display = "none";

        notificationPanel.classList.remove("show");

    };

}