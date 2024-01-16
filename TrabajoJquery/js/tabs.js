

$(document).ready(function() {
    // Paso 1: Ocultar todos los elementos div.module
    $('div.module').hide();
    
    // Paso 2: Crear una lista desordenada antes del primer div.module
    $('<ul class="tab-navigation"></ul>').insertBefore('div.module:first');

    // Paso 3: Interactuar con cada div utilizando $.fn.each
    $('div.module').each(function() {
        // Obtener el texto del elemento h2 para cada div.module
        var tabText = $(this).find('h2').text();

        // Añadir un ítem de lista por cada div.module
        $('.tab-navigation').append('<li><a href="#" class="tab-link">' + tabText + '</a></li>');
    });

    // Paso 4: Vincular un evento click a cada ítem de la lista
    $('.tab-link').click(function(e) {
        e.preventDefault();

        // Obtener el índice del ítem clickeado
        var index = $(this).parent().index();

        // Mostrar el div correspondiente y ocultar el otro
        $('div.module').hide().eq(index).show();

        // Añadir la clase "current" al ítem seleccionado y removerla del otro
        $(this).parent().addClass('current').siblings().removeClass('current');
    });

    // Paso 5: Mostrar la primera pestaña
    $('div.module:first').show();
    $('.tab-navigation li:first').addClass('current');
});


