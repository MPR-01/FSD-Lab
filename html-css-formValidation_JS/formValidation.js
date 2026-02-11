document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phoneNo");
    const emailInput = document.getElementById("email");
    const feedbackInput = document.getElementById("fdb");

    // Regex patterns
    const phonePattern = /^\+[0-9]{2}-[7-9][0-9]{9}$/;
    const namePattern = /^[A-Za-z\s]+$/;

    form.addEventListener("submit", function (event) {

        let isValid = true;

        // Clear old messages
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        // -------- Name Validation --------
        if (!namePattern.test(nameInput.value.trim())) {
            showError(nameInput, "Name should contain letters only");
            isValid = false;
        }

        // -------- Phone Validation --------
        if (!phonePattern.test(phoneInput.value.trim())) {
            showError(phoneInput, "Use format +91-9876543210");
            isValid = false;
        }

        // -------- Email Validation --------
        if (!emailInput.value.includes("@")) {
            showError(emailInput, "Enter valid email address");
            isValid = false;
        }

        // -------- Feedback Validation --------
        if (feedbackInput.value.trim().length < 10) {
            showError(feedbackInput, "Feedback must be at least 10 characters");
            isValid = false;
        }

        // Stop submission if invalid
        if (!isValid) {
            event.preventDefault();
        }

    });

    // Helper function to show error
    function showError(input, message) {
        input.nextElementSibling.textContent = message;
    }

});