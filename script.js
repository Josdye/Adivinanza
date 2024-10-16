let numgenerado = Math.floor(Math.random() * 101); // Genera un numero entre 0 y 100

function Verificar() {
    const numad = document.getElementById("numad").value;
    const Mensaje = document.getElementById("Mensaje");

    if (numad === "") {
        Mensaje.textContent = "Por favor, ingresa un numero.";
        return;
    }

    const numusuario = parseInt(numad);

    if (numusuario < numgenerado) {
        Mensaje.textContent = "El numero es mayor.";
    } else if (numusuario > numgenerado) {
        Mensaje.textContent = "El numero es menor.";
    } else {
        Mensaje.textContent = "Numero Adivinado";
    }
}

function GenerarNUmeroN() {
    numgenerado = Math.floor(Math.random() * 101);
    document.getElementById("Mensaje").textContent = "";
    document.getElementById("numad").value = "";
    document.getElementById("Mnumeroad").style.display = "none";
}

function MostrarN() {
    const Mnumeroad = document.getElementById("Mnumeroad");
    Mnumeroad.textContent = `El numero a adivinar es: ${numgenerado}`;
    Mnumeroad.style.display = "block";
}
