$( document ).ready(function() {
   /*traer usuarios para comparar de una*/
	obtenerUsuario();

});


function obtenerUsuario(){
    var usuarios = JSON.parse(localStorage.getItem("usuario"));
      if(!usuarios){
 		     usuarios = new Array();
  	  }
  	 for(var i = 0; i < usuarios.length; i++){
  		if (usuarios[i].correo == localStorage.getItem('activo')) {
        document.getElementById('nombre').innerHTML += " " +usuarios[i].nombre;
        document.getElementById('altura').innerHTML += " " +usuarios[i].altura;
        document.getElementById('peso').innerHTML += " " +usuarios[i].peso;
        document.getElementById('correo').innerHTML += " " +usuarios[i].correo;
      	break;
  		}
    }
    
}
