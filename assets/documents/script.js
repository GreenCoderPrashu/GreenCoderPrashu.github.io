function togglemenu(){
    const menu = document.querySelector(".Menu-Links");
    const icon = document.querySelector(".Ham-Icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const statusText = document.getElementById("form-status");
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const subject = encodeURIComponent("New Contact Message from " + name);
        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        statusText.textContent = "Opening your email app...";

        window.location.href = "mailto:pr829639@gmail.com?subject=" + subject + "&body=" + body;
        contactForm.reset();
    });
}