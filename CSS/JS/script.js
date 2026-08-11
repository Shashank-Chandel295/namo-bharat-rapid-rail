
/* =========================================
   NAMO BHARAT RAPID RAIL
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Set today's date
    const dateInput = document.getElementById("journeyDate");

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        dateInput.min = `${year}-${month}-${day}`;
        dateInput.value = `${year}-${month}-${day}`;
    }

});


/* =========================================
   LOGIN MODAL
========================================= */

function openLogin() {

     window.location.href = "login.html";
     
    const modal = document.getElementById("loginModal");

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeLogin() {

    const modal = document.getElementById("loginModal");

    modal.classList.remove("show");

    document.body.style.overflow = "auto";
}


/* Close modal when clicking outside */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("loginModal");

    if (event.target === modal) {
        closeLogin();
    }

});


/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

function togglePassword() {

    const password = document.getElementById("password");
    const eye = document.querySelector(".password-eye");

    if (password.type === "password") {

        password.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

}


/* =========================================
   LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();

    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (mobile.length !== 10) {

        showToast("Please enter a valid 10-digit mobile number.");

        return;
    }

    if (password.length < 4) {

        showToast("Password must contain at least 4 characters.");

        return;
    }

    showToast("Login successful! Welcome to Namo Bharat.");

    setTimeout(() => {

        closeLogin();

    }, 1500);

}


/* =========================================
   FORGOT PASSWORD
========================================= */

function forgotPassword() {

    closeLogin();

    showToast("Forgot Password / OTP module will open here.");

}


/* =========================================
   JOURNEY SEARCH
========================================= */

function searchJourney() {

    const from = document.getElementById("fromStation").value;
    const to = document.getElementById("toStation").value;
    const date = document.getElementById("journeyDate").value;

    if (!from || !to) {

        showToast("Please select From and To stations.");

        return;
    }

    if (from === to) {

        showToast("From and To stations cannot be same.");

        return;
    }

    if (!date) {

        showToast("Please select journey date.");

        return;
    }

    showToast(
        `Journey found: ${from} → ${to}`
    );

}


/* =========================================
   SWAP STATIONS
========================================= */

function swapStations() {

    const from = document.getElementById("fromStation");
    const to = document.getElementById("toStation");

    const temp = from.value;

    from.value = to.value;
    to.value = temp;

}


/* =========================================
   SCROLL FUNCTIONS
========================================= */

function scrollToBooking() {

    document.getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToRoutes() {

    document.getElementById("routes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToSchedule() {

    document.getElementById("schedule")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "78px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "20px";
        nav.style.background = "white";
        nav.style.flexDirection = "column";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";

    }

}


/* =========================================
   LANGUAGE
========================================= */

function changeLanguage() {

    showToast("Hindi / English language module ready for integration.");

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

