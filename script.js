window.onload = function(){

var input = document.getElementById("name");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});
  
  localStorage.setItem("Puntaje", 0);
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {

  var nombreUsuario = document.getElementById('name').value;
   localStorage.setItem("jugador", nombreUsuario);
 alert('Hola ' + nombreUsuario + ',' + ' encantada de conocerte!');

 
    
  });
};