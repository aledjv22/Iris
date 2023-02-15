//Creo los elementos
const mensaje = document.querySelector("#mensaje1");
const boton = document.querySelector("#btn-regalo");
const titulo = document.querySelector(".titulo");
// Obtener la fecha actual
var hoy = new Date();
var today = (hoy.getDate().toString()) + ((hoy.getMonth() + 1).toString());
var cumple = "162";

//funcion de muestra de mensajes
function mostrarMensaje(){
    // Mostrar el mensaje de cumpleaños si es el día del cumpleaños
    if (today == cumple) {
        mensaje.innerHTML = "¡Feliz Cumpleaños!";
        document.title = "Feliz cumpleaños Iris!!!🎉";
        boton.style.display = 'none';
        mensaje.classList.toggle("inactive");
    } else {
        mensaje.innerHTML = "Aun falta para tu cumpleaños, espera un toque plis. 🙌";
        titulo.classList.toggle("inactive");
        boton.style.display = 'none';
        mensaje.classList.toggle("holis");
        
    }
}