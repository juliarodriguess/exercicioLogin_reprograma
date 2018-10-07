let email = document.querySelector("#loginInputEmail");
let password = document.querySelector("#loginInputPassword");
let button = document.querySelector(".button");
let labelEmail = document.querySelector("#label_email");
let labelPassword = document.querySelector("#label_password");
button.addEventListener("click", function(event) {
    event.preventDefault();
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        const error = document.createElement("p")
        const errorMessage = document.createTextNode("Não é um e-mail válido")
        error.appendChild(errorMessage);
        labelEmail.appendChild(error);
        //email.parentNode.insertBefore(error, email);
    } if (password.value.length < 6) {
        const error = document.createElement("p")
        const errorMessage = document.createTextNode("Senha muito curta")
        error.appendChild(errorMessage);
        labelPassword.appendChild(error);
    } else {
        alert("Tudo ok! Estamos te direcionando :)")
    }  
});