// Variables Globales
var tiempo = {};
var reloj = new Date("2016-06-01 5:00:00 PM"); // Obtener la fecha y almacenar en reloj
var intervalo = window.setInterval(mostrar_hora, 1); // Frecuencia de actualización
var i = 0; // Esta variable va a definir los estados de intervalo

function mostrar_hora()
  {
    var tiempoActual = new Date();
    // Inserta la hora almacenada en reloj en el span con id hora
    tiempo.horas = document.getElementById('hora');
    tiempo.horas.innerHTML = reloj.getHours() - tiempoActual.getHours();

    // Inserta los minutos almacenados en reloj en el span con id minuto
    tiempo.minuto = document.getElementById('minuto');
    tiempo.minuto.innerHTML = reloj.getMinutes()+60 - tiempoActual.getMinutes();

    // Inserta los segundos almacenados en reloj en el span con id segundo
    tiempo.segundos = document.getElementById('segundo')
    tiempo.segundos.innerHTML = "0" + reloj.getSeconds()+60 - tiempoActual.getSeconds();
  }
