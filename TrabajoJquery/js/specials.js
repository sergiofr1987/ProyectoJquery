// // 1.	Añadir un elemento div después del formulario que se encuentra dentro del elemento 
// //       #specials; allí será el lugar en donde se colocará la información a obtener.

// $(document).ready(function() {
//     // Selecciona el formulario dentro del elemento con ID #specials
//     var specialsForm = $('#specials form');

//     // Crea un nuevo elemento div
//     var newDiv = $('<div id="specialsInfo"></div>');

//     // Inserta el nuevo div después del formulario dentro de #specials
//     specialsForm.after(newDiv);
// });

// // 2.	Al hacer click en otro titular, se debe ocultar el párrafo mostrado con un efecto de
// //     deslizamiento y mostrar nuevamente el párrafo correspondiente también con un efecto de 
// //     deslizamiento. Ayuda: No se olvide de utilizar el selector :visible.

// $(document).ready(function() {
//     // Selecciona todos los elementos 'h3' que son títulos de artículos de blog
//     $('#blog h3').on('click', function() {
//         // Encuentra el párrafo actualmente visible en el área de blog
//         var visibleParagraph = $('#blog p.excerpt:visible');

//         // Si hay un párrafo visible, ocúltalo con un efecto de deslizamiento hacia arriba
//         if (visibleParagraph.length > 0) {
//             visibleParagraph.slideUp();
//         }

//         // Encuentra el párrafo correspondiente al título al que se le hizo clic y muéstralo con un efecto de deslizamiento hacia abajo
//         var targetParagraph = $(this).next('p.excerpt');
//         targetParagraph.slideDown();
//     });
// });

// // 3.	Cuando la petición devuelve una respuesta, utilizar el valor seleccionado en el 
// // select (ayuda: $.fn.val) para buscar la información correspondiente en la respuesta JSON.
// // 4.	Añadir algún HTML con la información obtenida en el div creado anteriormente.

// $(document).ready(function() {
//     $('#specials form').on('submit', function(event) {
//         event.preventDefault();
//         var selectedDay = $('select[name="day"]').val();

//         // Suponiendo que 'data' es tu objeto JSON de ejemplo
//         var data = {
//             "monday": "Specials for Monday",
//             "tuesday": "Specials for Tuesday",
//             "friday": "Specials for Friday"
//         };

//         var selectedInfo = data[selectedDay];

//         // Mostrar la información en el div creado anteriormente
//         $('#specialsInfo').html('<p>' + selectedInfo + '</p>');
//     });
// });

// // 5.	Finalmente remover el botón submit del formulario.

// $(document).ready(function() {
//     // Remover el botón submit del formulario
//     $('#specials form').find('.input_submit').remove();
// });
////////////////////////////

$(document).ready(function() {
    
    // Selecciono el elemento con el ID 'specials'
    var $specials = $('#specials');

    // Elimino los elementos 'li' con la clase 'buttons'
    $specials.find('li.buttons').remove();

    // Variable para almacenar la respuesta JSON recuperada del servidor
    var cachedResponse = null;

    // Creo un elemento 'div' y lo añade como hijo del elemento 'specials'
    var $details = $('<div/>').appendTo($specials);

    // Selecciono el elemento 'select' dentro de 'specials'
    var $select = $specials.find('select');

    // Función para manejar la respuesta del servidor y actualizar la interfaz de usuario
    var handleResponse = function(daySpecial) {
        // Construyo el HTML utilizando los datos del objeto 'daySpecial'
        var html = '<h3>' + daySpecial.title + '</h3>';
        html += '<p>' + daySpecial.text + '</p>';

        // Actualizo el contenido del elemento 'details' con el HTML construido
        $details.html(html);

        // Creo una imagen, establece el atributo 'src' y la agrega al elemento 'details'
        $('<img/>').attr('src', daySpecial.image).appendTo($details);

        // Establezco el color del elemento 'details' según el color proporcionado en 'daySpecial'
        $details.css('color', daySpecial.color);
    };

    // Función para actualizar los detalles basándose en el valor seleccionado en el 'select'
    var updateDetails = function(val) {
        // Si no hay un valor seleccionado, vacía el contenido de 'details'
        if (!val) {
            $details.empty();
            return;
        }

        // Si la respuesta está en caché, utiliza la función 'handleResponse'
        // con la respuesta en caché y el valor seleccionado
        if (cachedResponse) {
            handleResponse(cachedResponse[val]);
        } else {
            // Si la respuesta no está en caché, realiza una solicitud AJAX para obtener la respuesta
            $.ajax({
                type: 'get',
                dataType: 'json',
                url: 'data/specials.json',
                success: function(specials) {
                    // Almacena la respuesta en caché
                    cachedResponse = specials;
                    // Utiliza la función 'handleResponse' con la respuesta y el valor seleccionado
                    handleResponse(specials[val]);
                }
            });
        }
    };

    // Asocia la función 'updateDetails' al evento 'change' del elemento 'select'
    $select.change(function() {
        // Llama a la función 'updateDetails' con el valor seleccionado en 'select'
        updateDetails($select.val());
    });
});






