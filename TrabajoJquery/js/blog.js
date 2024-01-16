$(document).ready(function() {
    // Al hacer clic en un titular del div #blog
    $('#blog h3').click(function(e) {
        e.preventDefault();

        // Oculta el párrafo actualmente visible con un efecto de deslizamiento
        $('#blog .excerpt:visible').slideUp();

        // Muestra el párrafo correspondiente con un efecto de deslizamiento
        $(this).next('.excerpt').slideDown();
    });
});