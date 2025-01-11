document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.querySelector(".app-form-button:nth-child(2)");
    const nameInput = document.querySelector(".app-form-control[placeholder='NAME']");
    const emailInput = document.querySelector(".app-form-control[placeholder='EMAIL']");
    const contactInput = document.querySelector(".app-form-control[placeholder='CONTACT NO']");
    const messageInput = document.querySelector(".app-form-control[placeholder='MESSAGE']");

    sendButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const contact = contactInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            alert("Please enter your email.");
            emailInput.focus();
            return;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        const contactPattern = /^[0-9]{10}$/; // Assumes 10-digit phone numbers
        if (contact === "") {
            alert("Please enter your contact number.");
            contactInput.focus();
            return;
        } else if (!contactPattern.test(contact)) {
            alert("Please enter a valid 10-digit contact number.");
            contactInput.focus();
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            messageInput.focus();
            return;
        }
        nameInput.value="";
        emailInput.value="";
        contactInput.value="";
        messageInput.value="";
        alert("Thank you for your message!");

    });
});
