
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

	llenarTabla();
	$('.btn-primary').click(function(){
		var correo = $(this).val();
		$('#usuarioRutina').html(correo);
	});

	$('#guardarRutina').click(function(){
		guardarRutina();
	});
});

function llenarTabla(){
	var usuarios = JSON.parse(localStorage.getItem('usuario'));
	if(!usuarios){
		usuarios = new Array();
	}
	var tbody = document.getElementById('tablaCliente');

	for(var i = 0; i < usuarios.length; i++){
		tbody.innerHTML +=	"<tr><td>"+usuarios[i].nombre+"</td><td>"+usuarios[i].altura+"</td>"+
		"<td>"+usuarios[i].peso+"</td><td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' data-toggle='modal' data-target='#myModal'>Rutina</button></td>"+
		"<td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' onclick='eliminarusuario()'>Eliminar</button></td></tr>";	 
	}
}

function guardarRutina(){
	var  usuario = document.getElementById('usuarioRutina').innerHTML;
	var rutinas = JSON.parse(localStorage.getItem('rutinas'));

  if(!rutinas){
  rutinas = new Array();
  }
  for(var i = 0; i < rutinas.length; i++){
  	if (rutinas[i][0] == usuario) {
  		rutinas.splice(i,1);
  		break;
  	}
}
  var rutina =new Array();
  if (typeof(Storage) !== "undefined") {
  rutina[0] = usuario;
  rutina[1] = document.getElementById('rutinaDesc').value;
  rutinas.push(rutina);
  localStorage.setItem("rutinas", JSON.stringify(rutinas));
  }
}

function eliminarusuario() {
   	var  usuario = document.getElementById('usuarioRutina').innerHTML;
	var usuarios = JSON.parse(localStorage.getItem('usuario'));

	var usuarioRtina = document.getElementById('usuarioRutina').innerHTML;
	var rutinasDatos = JSON.parse(localStorage.getItem('rutinas'));

	var usuarioExiste = false;
	var rutnaExiste = false;
	if (!usuarios) {
     	  usuarios = new Array();
	}
	for (var i = 0; i < usuarios.length; i++) {
		if (usuario == usuarios[i].correo) {
			usuarioExiste = true;
		}
	}
	if (usuarioExiste) {
		for (var i = 0; i < usuarios.length; i++) {
			usuarios[i] = null;
		}
	  var arreglo = [];
         for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i] == null) {
			 }
            else {
            arreglo.push(usuarios[i]);
            }
     	 }
     	 //---------------------------------------
     	if (!rutinasDatos) {
		  rutinasDatos = new Array();
		}

         for (var i = 0; i < rutinasDatos.length; i++) {
         	if (usuarioRtina == rutinasDatos[i][0]) {
         		rutnaExiste =  true;
         	}
         }
         if (rutnaExiste) {
         	for (var i = 0; i < rutinasDatos.length; i++) {
	         		rutinasDatos[i] = null;
	         	}
	         	var arregloRutina = [];
	        for (var i = 0; i < rutinasDatos.length; i++) {
        	    if (rutinasDatos[i] == null) {
			 }
            else {
            arregloRutina.push(usuarios[i]);
            }
     	 }
       }
		localStorage.setItem("usuario", JSON.stringify(arreglo));
		localStorage.setItem("rutinas", JSON.stringify(arregloRutina));
        location.href = "adminTabla.html";
	}	
 }
 
