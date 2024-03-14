
$(document).ready(function(){
  $('[data-toggle="tooltip"]'). tooltip();
  $ ('#EnviarCorreo'). click (function() {
      alert('el correo fue enviado correctamente...');
  });
});

const textoRojito = document.getElementById('ingredientes');
textoRojito.addEventListener('dblclick', function(){
  textoRojito.className = "cambio-color-a-rojito"
});
const textoRojitoDos = document.getElementById('preparacion');
textoRojitoDos.addEventListener('dblclick', function(){
  textoRojitoDos.className = "cambio-color-a-rojito"
});

$(document).ready(function(){
  $('[#card-title]').click (function(){
    $ (this). hide();
  }); 
});

