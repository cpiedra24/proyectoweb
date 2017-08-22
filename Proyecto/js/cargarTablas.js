
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

    $( "#btn_clientes" ).click(function() {
        llenarTabla();
    });

});

function llenarTabla(){
	var tbody = document.querySelector('#tablaCliente tbody');
	tbody.innerHTML = '';

	var nombre = JSON.parse(localStorage.getItem('nombre'));
	var peso = JSON.parse(localStorage.getItem('peso'));
	var altura = JSON.parse(localStorage.getItem('altura'));

	var cantUsuarios = nombre.lenght;
	for (var i = 0; i< cantUsuarios; i++) {
	var fila = document.createElement('tr');
	var celdaNombre = document.createElement('td');
	var celdaPeso = document.createElement('td');
	var celdaAltura = document.createElement('td');

	var ndoNombre = document.createTextNode(nombre[i]),
		ndoPeso = document.createTextNode(peso[i]),
		ndoAltura = document.createTextNode(altura[i]);


		celdaNombre.appendChild(ndoNombre);
		celdaPeso.appendChild(ndoPeso);
		celdaAltura.appendChild(ndoAltura);

		fila.appendChild(celdaNombre);
		fila.appendChild(celdaPeso);
		fila.appendChild(celdaAltura);

		tbody.appendChild(fila); 

	}
}