
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/
	cargarIngreso();
	$('.btn-primary').click(function(){
		var correo = $(this).val();
		$('#usuarioPago').html(correo);
	});
//	$('#guardarRutina').click(function(){
	//	guardarRutina();
	//});
});
// metodo para cargar el nombre de los usuarios en una tabla..
function cargarIngreso(){
	var usuarios = JSON.parse(localStorage.getItem('usuario'));
	if(!usuarios){
		usuarios = new Array();
	}
	var tbody = document.getElementById('tablaIngresos');

	for(var i = 0; i < usuarios.length; i++){
		tbody.innerHTML +=	"<tr><tr><td>"+usuarios[i].nombre+"</td><td><button value = "+usuarios[i].correo+"class = 'btn btn-primary' data-toggle='modal' data-target='#myModal'>Agregar Pago</button></td></tr>";
	}
}
