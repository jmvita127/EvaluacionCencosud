// Capturo slider y lo almaceno en una variable
var slider = $('#slider');
// Capturo los botones y los almaceno en una variable
var siguiente = $('#btn-next');
var atras = $('#btn-prev');

// Capturo la ultima imagen del slider que se encuentra en section y la inserto en primer lugar
$('#slider section:last').insertBefore('#slider section:first');
// Muestro la primera imagen con margen en -100%, para poder ver la segunda imagen
slider.css('margin-left', '-'+100+'%');

//En margin left: -200% porque es la segunda imagen a mostrar.
//700 es el tiempo en milisegundos que tarda en pasar el slider a la proxima imagen.
function siguienteImagen()
{
  slider.animate({marginLeft:'-'+200+'%'},700,
  function()
  {
    $('#slider section:first').insertAfter('#slider section:last');
    slider.css('margin-left', '-'+100+'%');
  });
}

//Ahora el margin left va a ser cero para mostrar la proxima imagen hacia la izquierda
function anteriorImagen()
{
  slider.animate({marginLeft:0},700,
  function()
  {
    $('#slider section:last').insertBefore('#slider section:first');
    slider.css('margin-left', '-'+100+'%');
  });
}

siguiente.on('click', function()
{
  siguienteImagen();
});

atras.on('click', function()
{
  anteriorImagen();
});

//Funcion para que el slider funcione de forma automatica
function slideAuto()
{
  interval = setInterval(function()
  {
    siguienteImagen();
  }, 4000); //3000 indica la cantidad de milisegundos que va a tardar en cambiar a la proxima imagen.
}

//Ejecuto slideAuto
slideAuto();
