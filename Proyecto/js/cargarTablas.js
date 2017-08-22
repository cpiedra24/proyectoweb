
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

	llenarTabla();
	$('.btn-primary').click(function(){
		var correo = $(this).val();
		$('#usuarioRutina').html(correo);
	});
});

function llenarTabla(){
	var usuarios = JSON.parse(localStorage.getItem('usuario'));
	if(!usuarios){
		usuarios = new Array();
	}
	var tbody = document.getElementById('tablaCliente');

	for(var i = 0; i < usuarios.length; i++){
		tbody.innerHTML +=	"<tr><td>"+usuarios[i].nombre+"</td><td>"+usuarios[i].peso+"</td>"+
		"<td>"+usuarios[i].altura+"</td><td><button value = "+usuarios[i].correo+" class = 'btn btn-primary' data-toggle='modal' data-target='#myModal'>Rutina</button></td></tr>";	
	
	}

}
