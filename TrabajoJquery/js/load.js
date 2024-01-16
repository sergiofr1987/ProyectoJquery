// Espera a que el documento esté listo
$(document).ready(function() {
    // Selecciono los elementos 'h3' que son títulos de artículos de blog
    $('#blog h3').each(function(index) {
        // Crea un div después de cada título de artículo
        $(this).after('<div id="contenido' + index + '"></div>');

        // Guardo una referencia al div recién creado en el elemento de título utilizando $.fn.data
        $(this).data('contentDiv', $('#contenido' + index));

        // Agrego un evento de clic a cada título del artículo
        $(this).on('click', function(event) {
            event.preventDefault(); 

            // obtengo el href del enlace dentro del título del artículo
            var href = $(this).find('a').attr('href');

            // Utilizo el href para obtener el selector del contenido del blog.html
            var tempArray = href.split('#');
            var id = '#' + tempArray[1];

            console.log('Seleccionado:', id);

            var contentDiv = $(this).data('contentDiv'); // Obtiene la referencia al div de contenido asociado

            // Cargo el contenido a desde el archivo blog.html usando $.fn.load
            contentDiv.load('ejercicios/data/blog.html ' + id);
        });
    });
});
