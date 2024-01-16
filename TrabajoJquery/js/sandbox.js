
$(document).ready(function() {
    // selecciono todos los div con la clase 'module'
    var modulos = $('div.module');
    
    // Hago algo con la seleccion de los DIV
    modulos.each(function() {
      // imprimo el texto de cada div en la consola
      console.log($(this).text());
      
      //pongo un borde para ver que funciona la seleccion
      $(this).css('border', '2px solid blue');
    });
  });
  
//   Selección 1: Por índice (Equivalente a Array, comenzando desde 0)
  var tercerItem = $('#myList li:eq(2)');

//   Selección 2: Por combinación de ID
  var tercerItem = $('#myList #myListItem');

//   Selección 3: Por id y pseudoclase nth-child
  var tercerItem = $('#myList li:nth-child(3)');

  $(document).ready(function() {
    // Seleccionoel elemento label del elemento input utilizando un selector de atributo
    var seleccion = $('label[for="q"]');
    console.log(seleccion.text());
    seleccion.css('color', 'blue'); // Lo pongo en azul
  });
  

  $(document).ready(function() {
    // Selecciono elementos ocultos
    var elementosOcultos = $(':hidden');
    
    // con el .length que indica la cantidad de ocultos
    var cantidadElementosOcultos = elementosOcultos.length;
    
    // Muestro por consola que cantidad hay
    console.log("Cantidad de elementos ocultos: " + cantidadElementosOcultos);
  });

  
  $(document).ready(function() {
    // Seleccionar todas las imágenes en la página
    var imagenes = $('img');
    
    // Filtrar las imágenes que tienen el atributo 'alt' definido
    var imagenesConAlt = imagenes.filter('[alt]');
    
    // Obtener la cantidad de imágenes con atributo 'alt'
    var cantidadImagenesConAlt = imagenesConAlt.length;
    
    // Muestro por consola que cantidad hay
    console.log("Cantidad de imágenes con atributo 'alt': " + cantidadImagenesConAlt);
  });

  
  $(document).ready(function() {
    // Selecciono filas impares del cuerpo de la tabla
    var filasImpares = $('#fruits tbody tr:nth-child(odd)');
    
    // cambio color de fondo paraq comprobarlo
    filasImpares.css('background-color', 'orange');
  });
  
  $(document).ready(function() {
    // Selecciono  las imagenes
    var imagenes = $('img');
    
    // Itero sobre cada imagen para obtener el atributo 'alt'
    for (var i = 0; i < imagenes.length; i++) {
        var altDeImagen = imagenes[i].getAttribute('alt');
        console.log("Atributo 'alt' de la imagen:", altDeImagen);}
  })
//   });
  
$(document).ready(function() {
    // Seleccio elemento input dentro del formulario
    var inputElement = $('#search').find('input');
  
    // Añadir una clase al formulario
    inputElement.closest('form').addClass('nuevaClase');
  });
  
  $(document).ready(function() {
    // Selecciono el ítem que tiene la clase "current" dentro de #myList
    var elementoActual = $('#myList .current');
  
    // Remover la clase "current" del elemento actual
    elementoActual.removeClass('current');
  
    // el siguiente ítem de la lista
    var siguienteElemento = elementoActual.next();
  
    // Verifico si hay un siguiente ítem y agregar la clase "current"
    if (siguienteElemento.length > 0) {
      siguienteElemento.addClass('current');
    } else {
      // Si no hay un siguiente ítem, añadir la clase "current" al primer ítem de la lista
      $('#myList li:first').addClass('current');
    }
  });

  $(document).ready(function() {
    // Seleccionar el elemento select dentro de #specials
    var selectElement = $('#specials').find('select');
  
    // Dirigirse hacia el botón submit desde el select
    var submitButton = selectElement.closest('#specials').find('input[type="submit"]');
    
    // Hacer algo con el botón submit, por ejemplo, añadir una clase
    submitButton.addClass('claseEjemplo');
  });
  
  $(document).ready(function() {
    // Seleccionar el primer ítem de la lista en #slideshow y añadir la clase "current"
    $('#slideshow li:first-child').addClass('current');
  });
  

  $(document).ready(function() {
    // Agregar 5 nuevos ítems al final de la lista #myList
    for (var i = 1; i <= 5; i++) {
      $('#myList').append('<li>Elemento nuevo añadido ' + i + '</li>');
    }
  });

  $(document).ready(function() {
    // Seleccionar y eliminar ítems impares de la lista #myList
    $('#myList li:nth-child(odd)').remove();
  });

  $(document).ready(function() {
    // Seleccionar el último div.module y añadir un nuevo h2 y un párrafo
    $('div.module:last').append('<h2>Titulo H2 añadido</h2><p>Añado este parrafo también.</p>');
  });
  

  $(document).ready(function() {
    // Añadir una nueva opción al elemento select con el valor "Wednesday"
    $('select[name="day"]').append('<option value="Wednesday">Wednesday</option>');
  });
  
  $(document).ready(function() {
    // Creo un nuevo div.module
    var nuevoDiv = $('<div class="module">');
  
    // Inserto el nuevo div después del último div.module
    $('div.module:last').after(nuevoDiv);
  
    // Clono la primera imagen existente y la añado al nuevo div
    var imagenExistente = $('img:first').clone();
    nuevoDiv.append(imagenExistente);
  });
  