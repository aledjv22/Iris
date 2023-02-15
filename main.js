// Obtener la fecha actual
var hoy = new Date();
// Establecer la fecha del cumpleaños
var fechaCumple = new Date("2023-02-15");
// Obtener la diferencia de tiempo entre las dos fechas
var diffTiempo = fechaCumple.getTime() - hoy.getTime();
// Convertir la diferencia de tiempo a días
var diffDias = Math.floor(diffTiempo / (1000 * 60 * 60 * 24));

// Mostrar el mensaje de cumpleaños si es el día del cumpleaños
if (diffDias == 0) {
    document.getElementById("mensaje").innerHTML = "¡Feliz Cumpleaños!";
    document.title = "Feliz cumpleaños Iris!!!🎉";
    document.getElementById("btn-regalo").classList.toggle("inactive");
} else {
    document.getElementById("mensaje").innerHTML = "Faltan " + diffDias + " días para tu cumpleaños";
}