
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/
	document.getElementById('perfilCargado').innerHTML = localStorage.getItem('activo');

	obtenerRutinas();

});
function obtenerRutinas(){
    var rutinas = JSON.parse(localStorage.getItem("rutinas"));
      if(!rutinas){
 		 rutinas = new Array();
  	}
  	var cuadroRutina = document.getElementById('cuadroRutina');
  	 for(var i = 0; i < rutinas.length; i++){
  		if (rutinas[i][0] == localStorage.getItem('activo')) {
  			cuadroRutina.innerHTML = "<div class='col-xs-12 col-sm-12 col-md-8 col-lg-8'>"+rutinas[i][1]+"</div>";
  			break;
  		}
  } 
}
function logOut(){
      localStorage.removeItem('activo');
      location.href = "index.html";    
}

