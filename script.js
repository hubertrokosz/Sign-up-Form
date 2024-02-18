let form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        
        let error = document.createElement("span");
        error.innerHTML = "* Passwords do not match";
        error.style.color = "red";
        //let email = document.getElementById("email");
        //document.body.insertBefore(error, email);
        document.getElementById("password-container").appendChild(error);

        event.preventDefault();
    }
});




