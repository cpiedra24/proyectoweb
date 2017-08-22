// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

    $( "#btn_crear" ).click(function() {
        guardarUsuario();
    });

});
    function guardarUsuario(){
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var apellido = document.getElementById('apellido').value;
    var password = document.getElementById('contrasenna').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if (nombre == "" || correo == "" || apellido == "" || password == "" ||
        nombre == " " || correo == " " || apellido == " " || password == " ") {
        alert("escribe todos los datos por favor");
    }
    else {
        var usuario = {nombre: nombre, correo: correo, apellido: apellido, password: password, peso: peso, altura: altura};
        var datos = JSON.parse(localStorage.getItem("usuario"));
        if (datos == null) {
            var arreglo = [];
            arreglo.push(usuario);
            localStorage.setItem("usuario", JSON.stringify(arreglo));
            location.href = "signup.html";
        }
        else {
            var usernamerepetido = false;
            for (var i = 0; i < datos.length; i++) {
                if (usuario.correo == datos[i].correo) {
                    usernamerepetido = true;
                }
            }
        if (usernamerepetido) {
                if (usernamerepetido == true) {
                   alert("Ese username ya esta reservado para un usuario");
                }
            }
            else {
                datos.push(usuario);
                localStorage.setItem("usuario", JSON.stringify(datos));
            }
        }
    }
}
