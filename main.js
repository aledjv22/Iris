//Creo los elementos
const mensaje = document.querySelector("#mensaje1");
const boton = document.querySelector(".btn-regalo");
const titulo = document.querySelector(".titulo");
const boton2 = document.querySelector(".btn-salida");
// Obtener la fecha actual
var hoy = new Date();
var today = (hoy.getDate().toString()) + ((hoy.getMonth() + 1).toString());
var cumple = "152";

//funcion de muestra de mensajes
function mostrarMensaje(){
    // Mostrar el mensaje de cumpleaños si es el día del cumpleaños
    if (today == cumple) {
        titulo.classList.toggle("inactive");
        boton.classList.toggle("inactive");
        mensaje.innerHTML = "Feliz cumpleaños Iris";
        mensaje.classList.toggle("holis");
        boton2.classList.toggle("inactive");
    } else {
        mensaje.innerHTML = "Aun falta para tu cumpleaños, espera un toque plis. 🙌";
        titulo.classList.toggle("inactive");
        boton.classList.toggle("inactive");
        mensaje.classList.toggle("chau");
        boton2.classList.toggle("inactive");
    }
}

function atras(){
    boton2.classList.toggle("inactive");
    titulo.classList.toggle("inactive");
    boton.classList.toggle("inactive");
    mensaje.classList.toggle("inactive");
}