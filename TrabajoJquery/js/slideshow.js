// capturo el elemento #slideshow
var slideshow = document.getElementById('slideshow');

// muevo el elemento al principio del body
document.body.insertBefore(slideshow, document.body.firstChild);

// $(document).ready(function() {
//   var $elementos = $('#slideshow li'); // Selecciona todos los elementos de la lista dentro de #slideshow
//   var indiceElementos = 0; // Índice del elemento actual

//   function siguenteItem() {
//     var siguienteElento = (indiceElementos + 1) % $elementos.length; // Calcula el índice del siguiente elemento

//     // Oculta el elemento actual con un efecto fadeOut y muestra el siguiente después de ocultarse completamente
//     $elementos.eq(indiceElementos).fadeOut(1000, function() {
//       $elementos.eq(siguienteElento).fadeIn(1000);
//     });

//     indiceElementos = siguienteElento; // Actualiza el índice del elemento actual
//   }

//   // Esconde todos los elementos excepto el primero
//   $elementos.hide().eq(indiceElementos).show();

//   // Configura un intervalo para mostrar los elementos de forma cíclica cada 3 segundos
//   setInterval(siguenteItem, 3000);
// });

$(document).ready(function() {
  var $elementos = $('#slideshow li'); // Selecciono todos los elementos de la lista dentro de #slideshow
  var totalElementos = $elementos.length; // Total de elementos
  var indiceElementos = 0; // Índice del elemento actual

  function siguenteItem() {
    var siguienteElento = (indiceElementos + 1) % totalElementos; // Calculo el índice del siguiente elemento

    // Oculto el elemento actual con un efecto fadeOut y muestra el siguiente después de ocultarse completamente
    $elementos.eq(indiceElementos).fadeOut(1000, function() {
      $elementos.eq(siguienteElento).fadeIn(1000);
    });

    indiceElementos = siguienteElento; // Actualizo el índice del elemento actual
    actualizaNavegacion(); // Actualizo la navegación
  }

  // Escondo todos los elementos excepto el primero
  $elementos.hide().eq(indiceElementos).show();

  // Agrego la navegación debajo del slideshow
  var $navegacion = $('<div id="slideshow-navegacion"></div>').insertAfter('#slideshow');

  // Actualizo la navegación con la información de la posición actual y el total de imágenes
  function actualizaNavegacion() {
    $navegacion.text('Imagen ' + (indiceElementos + 1) + ' de ' + totalElementos);
  }

  // Configuro un intervalo para mostrar los elementos de forma cíclica cada 3 segundos
  var slideshowInterval = setInterval(siguenteItem, 3000);

  // Detiene el intervalo y vuelve al primer slide cuando se haya mostrado el último elemento
  function ReseteoSlide() {
    clearInterval(slideshowInterval); // Detiene el intervalo
    $elementos.fadeOut(1000); // Oculto todos los elementos
    indiceElementos = 0; // Reinicio el índice al primer elemento
    $elementos.eq(indiceElementos).fadeIn(1000); // Muestro el primer elemento
    actualizaNavegacion(); // Actualizo la navegación
    slideshowInterval = setInterval(siguenteItem, 3000); // Inicio de nuevo el intervalo
  }

  // Llamo a metodo ReseteoSlide después de mostrar el último elemento
  $elementos.last().find('img').on('load', function() {
    ReseteoSlide();
  });
});


// $(document).ready(function() {
//   var $elementos = $('#slideshow li'); // Selecciona todos los elementos de la lista dentro de #slideshow
//   var indiceElementos = 0; // Índice del elemento actual

//   function siguenteItem() {
//     var siguienteElento = (indiceElementos + 1) % $elementos.length; // Calcula el índice del siguiente elemento

//     // Oculta el elemento actual con un efecto fadeOut
//     $elementos.eq(indiceElementos).fadeOut(1000);

//     // Muestra el siguiente elemento con un efecto fadeIn
//     $elementos.eq(siguienteElento).fadeIn(1000);

//     indiceElementos = siguienteElento; // Actualiza el índice del elemento actual
//   }

//   // Muestra el primer elemento
//   $elementos.hide().eq(indiceElementos).show();

//   // Configura un intervalo para mostrar los elementos de forma cíclica cada 3 segundos (3000 ms)
//   setInterval(siguenteItem, 3000);
// });


// $(document).ready(function() {
//     // Oculto elementos del slideshow excepto el primero
//     $('#slideshow li').not(':first').hide();
  
//     // función para mostrar los ítems de manera ciclica
//     function formaCiclica() {
//       var $current = $('#slideshow li:visible');
//       var $next = ($current.next().length > 0) ? $current.next() : $('#slideshow li:first');
  
//       $current.fadeOut(1000, function() {
//         $next.fadeIn(2000);
//       });
//     }
  
//     // Llamo a la función cada cierto tiempo (2 segundos)
//     setInterval(formaCiclica, 2000);
//   });


//   $(document).ready(function() {
//     // ... (código previo del slideshow)
  
//     // Obtener la cantidad de ítems en el slideshow
//     var itemCount = $('#slideshow li').length;
  
//     // Agregar un área de navegación mostrando el número actual y total de ítems
//     $('#main').append('<div id="slideshowNav"></div>');
  
//     function actualizaNavegacion() {
//       var $current = $('#slideshow li:visible');
//       var indiceElementos = $current.index() + 1;
  
//       $('#slideshowNav').text('Imagen ' + indiceElementos + ' de ' + itemCount);
//     }
  
//     // Llamar a la función actualizaNavegacion para actualizar la posición actual
//     setInterval(actualizaNavegacion, 1000);
//   });
  

//   $(document).ready(function() {
//     var $slides = $('#slideshow li');
//     var slideCount = $slides.length;
//     var indiceElementos = 0;
//     var nav = $('#slideshowNav');

//     // Ocultar todos los elementos del slideshow excepto el primero
//     $slides.hide().eq(indiceElementos).show();

//     function showSlide(index) {
//         $slides.fadeOut(1000).eq(index).fadeIn(1000);
//     }

//     function actualizaNavegacion() {
//         nav.text('Imagen ' + (indiceElementos + 1) + ' de ' + slideCount);
//     }

//     function nextSlide() {
//         indiceElementos = (indiceElementos + 1) % slideCount;
//         showSlide(indiceElementos);
//         actualizaNavegacion();
//     }

//     // Mostrar el primer slide
//     actualizaNavegacion();

//     // Cambiar al siguiente slide cada 5 segundos
//     setInterval(nextSlide, 5000);
// });

// $(document).ready(function() {
//   // Mover el elemento #slideshow al principio de la página
//   $('#slideshow').prependTo('#main');

//   // Obtener todos los elementos de la lista del slideshow
//   var $slides = $('#slideshow li');
//   var totalSlides = $slides.length;
//   var currentSlide = 0;

//   // Función para mostrar los ítems de forma cíclica
//   function showNextSlide() {
//     var $currentItem = $slides.eq(currentSlide);
//     var $nextItem = $slides.eq((currentSlide + 1) % totalSlides);

//     $currentItem.fadeOut(1000);
//     $nextItem.fadeIn(1000);

//     currentSlide = (currentSlide + 1) % totalSlides;

//     setTimeout(showNextSlide, 3000); // Cambiar de ítem después de 3 segundos
//   }

//   // Ocultar todos los elementos del slideshow excepto el primero
//   $slides.hide();
//   $slides.eq(0).show();

//   // Iniciar el slideshow
//   setTimeout(showNextSlide, 3000); // Iniciar después de 3 segundos
// });


  