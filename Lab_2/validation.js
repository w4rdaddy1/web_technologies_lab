document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const fullName = document.getElementById("fullname").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;

       
        const nameRegex = /^[A-Za-z\s]+$/;
            
if (fullName === "" || !/^[a-zA-Z\s]+$/.test(fullName)) {
    alert("Please enter a valid Full Name using letters only. Numbers and special characters are not allowed.");
    e.preventDefault();
    return;
}

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            e.preventDefault();
            return;
        }

        
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
            return;
        }

      
    });
});