
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/
	cargarIngreso();
});


// metodo para cargar el nombre de los usuarios en una tabla..
function cargarIngreso(){
	var usuarios = JSON.parse(localStorage.getItem('usuario'));
	var pago = JSON.parse(localStorage.getItem('pago'));

	if(!usuarios){
		usuarios = new Array();
	}
	if (!pago) {
		pago = new Array();
	}
	var tbody = document.getElementById('tablaIngresos');

	for(var i = 0; i < usuarios.length; i++){

		tbody.innerHTML += "<tr><td> "+ usuarios[i].nombre+"</td><td>"+pago[i][1]+"</td></tr>";
	}
}
