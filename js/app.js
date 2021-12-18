const form = document.getElementById("form-user");
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
const div = document.getElementById("message");
const pattern = new RegExp('^[A-Z]+$', 'i');
const msj = " No puede estar vacío!"



form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementsByClassName("content")[0].style.maxHeight = "600px";
    if (firstName.value == "") {
        incorrecto(0, "First Name", msj);
    } else if (!pattern.test(firstName.value)) {
        document.getElementsByClassName("message")[0].innerHTML = "No es un Nombre Correcto";
    } else {
        correcto(0);
    }
    if (lastName.value == "") {
        incorrecto(1, "Last Name", msj);
    } else if (!pattern.test(lastName.value)) {
        document.getElementsByClassName("message")[1].innerHTML = "No es un Apellido Correcto";
    } else {
        correcto(1);
    }
    if (email.value == "") {
        incorrecto(2, "Email", msj);
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        document.getElementsByClassName("message")[2].innerHTML = "Looks like this is not an email";
    } else {
        correcto(2);
    }

    if (password.value == "") {
        incorrecto(3, "Password", msj);
    } else {
        correcto(3);
    }

});

firstName.addEventListener('change', e => {
    if (firstName.value == "") {
        incorrecto(0, "First Name");
    } else if (!pattern.test(firstName.value)) {
        incorrecto(0, "First Name", " no válido");

    } else {
        correcto(0);
    }
})
lastName.addEventListener('change', e => {
    if (lastName.value == "") {
        incorrecto(1, "Last Name");
    } else if (!pattern.test(lastName.value)) {
        incorrecto(1, "Last Name", " no válido");
    } else {
        correcto(1);
    }
})
email.addEventListener('change', e => {
    if (email.value == "") {
        incorrecto(2, "Email");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        incorrecto(2, "Email", " no válido");
    } else {
        correcto(2);
    }
})
password.addEventListener('change', e => {
    if (password.value.length < 0) {
        incorrecto(3, "Password", " muy corta, no válida");
    } else if (password.value.length > 8) {
        incorrecto(3, "Password", " muy larga");
    } else {
        correcto(3);
    }
})
function incorrecto(indice, name, mensaje) {
    document.getElementsByClassName("message")[indice].textContent = name + mensaje;
    document.getElementsByClassName("message")[indice].style.color = "red";
    document.getElementsByClassName("input")[indice].style.border = "1.4px solid red";
    document.getElementsByClassName("input")[indice].style.borderRadius = "5px";
    document.getElementsByClassName("input")[indice].style.backgroundImage = "url(../images/icon-error.svg)";
    document.getElementsByClassName("input")[indice].style.backgroundRepeat = "no-repeat";
    document.getElementsByClassName("input")[indice].style.backgroundPositionX = "98%";
    document.getElementsByClassName("input")[indice].style.backgroundPositionY = "center";
}
function correcto(indice) {
    document.getElementsByClassName("message")[indice].innerHTML = "";
    document.getElementsByClassName("input")[indice].style.border = "1.4px solid green";
    document.getElementsByClassName("input")[indice].style.backgroundImage = "";
}
