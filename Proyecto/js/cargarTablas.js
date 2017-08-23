
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

	llenarTabla();
	$('.btn-primary').click(function(){
		var correo = $(this).val();
		$('#usuarioRutina').html(correo);
	});
	
	$('#guardarPago').click(function(){
		guardarPago();
	});

	$('#guardarRutina').click(function(){
		guardarRutina();
	});

	
});

//Metodo para llenar la tabla con la cantdad de usuarios
function llenarTabla(){
	var usuarios = JSON.parse(localStorage.getItem('usuario'));

	if(!usuarios){
		usuarios = new Array();
	}
	for (var i = 0; i < usuarios.length; i++) {

	}
	var tbody = document.getElementById('tablaCliente');

	for(var i = 0; i < usuarios.length; i++){
			if (usuarios[i][1] != "admin") {
		tbody.innerHTML +=	"<tr><td>"+usuarios[i].nombre+"</td><td>"+usuarios[i].altura+"</td>"+
		"<td>"+usuarios[i].peso+"</td>"+
		"<td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' data-toggle='modal' data-target='#myModalPago'>Agregar Pago</button></td>"+
		"<td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' data-toggle='modal' data-target='#myModal'>Rutina</button></td>"+
		"<td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' onclick='eliminarusuario()'>Eliminar</button></td></tr>";	 

		}
		
	}
}

//Metodo para guardar la rutina del cliente
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

//Meotodo para guardar el pago del cliente!
function guardarPago(){
	var  usuario = document.getElementById('usuarioRutina').innerHTML;
	var pago = JSON.parse(localStorage.getItem('pago'));

  if(!pago){
  pago = new Array();
  }
  for(var i = 0; i < pago.length; i++){
  	if (pago[i][0] == usuario) {
  		pago.splice(i,1);
  		break;
  	}
}
  var pagos =new Array();
  if (typeof(Storage) !== "undefined") {
  pagos[0] = usuario;
  pagos[1] = document.getElementById('montoTotal').value;
  pago.push(pagos);
  localStorage.setItem("pago", JSON.stringify(pago));
  }
}

//Metodo para eliminar un usuario
function eliminarusuario() {
   	var  usuario = document.getElementById('usuarioRutina').innerHTML;
	var usuarios = JSON.parse(localStorage.getItem('usuario'));


	var usuarioRtina = document.getElementById('usuarioRutina').innerHTML;
	var rutinasDatos = JSON.parse(localStorage.getItem('rutinas'));

	var pagos = document.getElementById('usuarioRutina').innerHTML;
	var pago = JSON.parse(localStorage.getItem('pago'));

	if (!usuarios) {
     	  usuarios = new Array();
	}
	for (var i = 0; i < usuarios.length; i++) {
		if (usuario == usuarios[i].correo) {
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
       if (!pago) {
       	pago = new Array();
       }

            for (var i = 0; i < pago.length; i++) {
         	if (pagos == pago[i][0]) {
         		pago[i] = null;
         	}
         
	        var pagoTot = [];
	        for (var i = 0; i < pago.length; i++) {
        	    if (pago[i] == null) {
			 }
            else {
            pagoTot.push(usuarios[i]);
            }
     	 }
     	
       }
		localStorage.setItem("usuario", JSON.stringify(arreglo));
		localStorage.setItem("rutinas", JSON.stringify(arregloRutina));
		localStorage.setItem("pago", JSON.stringify(pagoTot));
        location.href = "adminTabla.html";
	}	
 }
 
