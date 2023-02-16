//Creo los elementos
const mensaje = document.querySelector(".mensaje1");
const boton = document.querySelector(".btn-regalo");
const titulo = document.querySelector(".titulo");
const boton2 = document.querySelector(".btn-salida");
const imagen1 = document.querySelector(".imagen1");
const imagen2 = document.querySelector(".imagen2");
const imagen3 = document.querySelector(".imagen3");
const imagen4 = document.querySelector(".imagen4");
const mensaje2 = document.querySelector(".mensaje2");
// Obtener la fecha actual
var hoy = new Date();
var today = (hoy.getDate().toString()) + ((hoy.getMonth() + 1).toString());
var cumple = "152";

//funcion de muestra de mensajes
function mostrarMensaje(){
    mensaje.classList.remove("inactive");
    mensaje2.classList.remove("inactive");
    titulo.classList.add("inactive");
    boton.classList.add("inactive");
    mensaje.innerHTML = "🎉🎉Feliz cumpleaños Iris🎉🎉 <br>¡Feliz cumpleaños mi mejor amiga💚!🎉🎂 Aunque solo nos conocemos desde hace unos pocos años, siento que hemos sido amiguis durante toda la vida. Amo pasar tiempo contigo (aunque sea poco) y siempre me divierto cuando estamos juntos😁. <br><br>Me encanta que compartamos el amor por MARVEL🦸‍♀️🦸‍♂️. Me emociona recordar las veces que vimos la peli de 🕷️Spider-Man🕷️ y ⚡️Thor⚡️, y cómo terminamos debatiendo sobre ellas❤️. <br><br> Me gusta que seas una persona tan divertida, generosa, que confrontes las cosas de una manera tan única y que cuentes con una personalidad tan maravillosa la cual me encanta y gusta descubrir más y más con cada momento compartido. Tu presencia siempre me alegra y estoy agradecido por tenerte como mi mejor amiga💚. Me encanta que puedas hacerme reír en los momentos más difíciles, siempre me escuches con atención cuando necesito desahogarme y aconsejes🤗. <br><br>En este día tan especial, quiero desearte todo lo mejor🌟. Que la vida te llene de felicidad, éxito en todo lo que te propongas y amor. Espero que continúes inspirándonos a todos tus cercanos con tu pasión por MARVEL y linda personalidad. Que este nuevo año te traiga muchas aventuras emocionantes, momentos inolvidables y muchos nuevos recuerdos juntos 🤩. <br><br>¡Feliz cumpleaños, mi mejor amiga💚! 🎉🎂 ¡Que la fuerza del universo de MARVEL esté siempre contigo! 🦸‍♀️🦸‍♂️ jejeje <br><br>Ahora es momento de unas fotiulis random que encontré en mi galería 📸: ";
    mensaje.classList.add("holis");
    imagen1.classList.remove("inactive");
    imagen2.classList.remove("inactive");
    imagen3.classList.remove("inactive");
    imagen4.classList.remove("inactive");
    mensaje2.innerHTML = "Te quiero mucho Iris, mejor dicho, te quiero mucho mi mejor amiga💚 y te deseo un muy feliz cumpleaños 🎉🎂.<br><br> Atte. io Ale jsjsjs";
    mensaje2.classList.add("holis");
    boton2.classList.remove("inactive");
}

function atras(){
    titulo.classList.remove("inactive");
    boton.classList.remove("inactive");
    mensaje.classList.add("inactive");
    mensaje2.classList.add("inactive");
    imagen1.classList.add("inactive");
    imagen2.classList.add("inactive");
    imagen3.classList.add("inactive");
    imagen4.classList.add("inactive");
    boton2.classList.add("inactive");
    
}