document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let firstname = document.getElementById("firstname").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let username = document.getElementById("username").value.trim();

    let namePattern = /^[A-Za-z]+$/;
    let contactPattern = /^[0-9]{10}$/;
    let usernamePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!namePattern.test(firstname)) {
        alert("First Name should contain only alphabets.");
        return;
    }

    if (dob === "") {
        alert("Please select your Date of Birth.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address with '@' symbol.");
        return;
    }

    if (!contactPattern.test(contact)) {
        alert("Contact Number must be exactly 10 digits.");
        return;
    }

    if (!usernamePattern.test(username)) {
        alert("Username must be exactly 6 characters and contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit.");
        return;
    }

    alert("Registration Successful!");

    setTimeout(() => {
        document.getElementById("registrationForm").submit();
    }, 100);
});