document.querySelector(".form").addEventListener("submit", function(e)  {
    e.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    //felmeddelande element
    const errorFirstName = document.getElementById("error-firstName");
    const errorLastName = document.getElementById("error-lastName");
    const errorEmail = document.getElementById("error-email");


    let isValid =true;

    [firstName, lastName, email, message].forEach(field => field.classList.remove("error"));
    [errorFirstName, errorLastName, errorEmail].forEach(span => span.textContent = "");


    if(firstName.value.trim() === "") {
        firstName.classList.add("error");
        errorFirstName.textContent = "First name is required.";
        isValid=false;
    }

    if(lastName.value.trim() === "") {
        lastName.classList.add("error");
        errorLastName.textContent = "Last name is required.";
        isValid=false;
    }

    if(email.value.trim() === "") {
        email.classList.add("error");
        errorEmail.textContent = "Email adress is required.";
        isValid=false;
    } else if(!email.value.includes("@")) {
        email.classList.add("error");
        errorEmail.textContent = "Please enter a valid email adress.";
        isValid=false;
    }



    if(!isValid) {
        return;
    }

    alert("Message sent! We will be in touch soon");
    document.querySelector(".form").reset();
});