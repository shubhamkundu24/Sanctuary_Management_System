document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("adoptionForm");
    const message = document.getElementById("message");
    const adoptButton = document.getElementById("button-adopt");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const animal = form.animal.value;

        if (name === "" || email === "" || phone === "" || animal === "") {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Validate phone format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            showMessage("Please enter a valid 10-digit phone number.", "error");
            return;
        }

        // If all validations pass, submit the form
        showMessage("Form submitted successfully!", "success");
        form.reset();

        // Update button text and style
        adoptButton.innerHTML = "Adopted!";
        adoptButton.style.backgroundColor = "green";
    });

    function showMessage(msg, type) {
        message.textContent = msg;
        message.className = type; // Add appropriate class for styling
        setTimeout(function() {
            message.textContent = "";
            message.className = "";
        }, 3000); // Clear message after 3 seconds
    }
});
