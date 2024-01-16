$(document).ready(function() {
    // Al pasar el puntero del ratón sobre un ítem del menú
    $('#nav > li').hover(function() {
        // Muestra el submenú si existe
        $(this).addClass('.hover');
        $(this).children('ul').slideDown();
    }, function() {
        // Oculta el submenú al retirar el puntero del ratón
        $(this).removeClass('.hover');
        $(this).children('ul').slideUp();
    });
});


