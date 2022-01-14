window.onload = function(){

  var puntajeFinal = localStorage.getItem("Puntaje");
   var divResultado = document.getElementById("resultado");
   var nombreUsuario = localStorage.getItem("jugador")
   divResultado.append("Gracias por jugar " + nombreUsuario +" tu puntaje final es : " + puntajeFinal);

   }
