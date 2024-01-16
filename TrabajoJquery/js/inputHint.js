// $(document).ready(function() {
//     // Obtener el texto del elemento label asociado al input
//     var labelText = $('label[for="q"]').text();
  
//     // Establecer el valor del input igual al texto del label
//     $('input[name="q"]').val(labelText);
//   });
//   $(document).ready(function() {
//     // Agregar la clase "hint" al elemento input
//     $('input[name="q"]').addClass('hint');
//   });

//   $(document).ready(function() {
//     // Agregar la clase "hint" al elemento input
//     $('input[name="q"]').addClass('hint');
  
//     // Eliminar el elemento label asociado al input
//     $('label[for="q"]').remove();
//   });
//   $(document).ready(function() {
//     // Agregar la clase "hint" al elemento input
//     $('input[name="q"]').addClass('hint');
  
//     // Vincular evento focus para eliminar texto de sugerencia y clase "hint"
//     $('input[name="q"]').on('focus', function() {
//       $(this).removeClass('hint').val('');
//     });
//   });

  
//   $(document).ready(function() {
//     // Agregar la clase "hint" al elemento input
//     $('input[name="q"]').addClass('hint');
  
//     // Vincular evento focus para eliminar texto de sugerencia y clase "hint"
//     $('input[name="q"]').on('focus', function() {
//       $(this).removeClass('hint').val('');
//     });
  
//     // Vincular evento blur para restaurar texto de sugerencia y clase "hint"
//     $('input[name="q"]').on('blur', function() {
//       if ($(this).val() === '') {
//         $(this).addClass('hint').val($('label[for="q"]').text());
//       }
//     });
//   });


$(document).ready(function() {
    // Obtengo el texto del elemento label asociado al input
    var labelText = $('label[for="q"]').text();
  
    // Establezco el valor del input igual al texto del label
    $('input[name="q"]').val(labelText);

    // Agregar la clase "hint" al elemento input
    $('input[name="q"]').addClass('hint');
  
    // Eliminar el elemento label asociado al input
    $('label[for="q"]').remove();
  
    // Vincular evento focus para eliminar texto de sugerencia y clase "hint"
    $('input[name="q"]').on('focus', function() {
      $(this).removeClass('hint').val('');
    });

     // Vinculo evento blur para restaurar texto de sugerencia y clase "hint"
    $('input[name="q"]').on('blur', function() {
          $(this).addClass('hint');
          $(this).val(labelText); 
     });
});   

  
//   $(document).ready(function() {
//     // Agregar la clase "hint" al elemento input
//     $('input[name="q"]').addClass('hint');
  
//     // Vincular evento focus para eliminar texto de sugerencia y clase "hint"
//     $('input[name="q"]').on('focus', function() {
//       $(this).removeClass('hint').val('');
//     });
  
//     // Vincular evento blur para restaurar texto de sugerencia y clase "hint"
//     $('input[name="q"]').on('blur', function() {
//       if ($(this).val() === '') {
//         $(this).addClass('hint').val($('label[for="q"]').text());
//       }
//     });
//   });
  