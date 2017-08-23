
// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

    $( "#btn_log" ).click(function() {
        loguearse();
    });

});
function loguearse() {
    var username = document.getElementById('correo').value;
    var password = document.getElementById('contrasenna').value;
    var usuarios = JSON.parse(localStorage.getItem("usuario"));
    var usuariocorrecto = false;
    var usuarioON;
    if (username == "" || password == "" || username == " " || password == " ") {
        document.getElementById('mensaje').innerHTML = "<p class=col-md-offset-4 text-center id=mensaje>Escribe todos los datos por favor</p>";
    }

    else {
        for (var i = 0; i < usuarios.length; i++) {
            if ((username == usuarios[i].correo) && (password == usuarios[i].password)) {
                usuariocorrecto = true;
                var usuarioON = usuarios[i].correo;
            }
        }
        if (usuariocorrecto == true) {
            localStorage.setItem('activo',username);
            location.href = "admin.html";
        }
    }
}
function loguearse() {
    var admin = document.getElementById('admin').value;
    var password = document.getElementById('contrasenna').value;
    var usuarios = JSON.parse(localStorage.getItem("usuario"));
    var usuariocorrecto = false;
    var usuarioON;
    if (admin == "" || password == "") {
        document.getElementById('mensaje').innerHTML = "<p class=col-md-offset-4 text-center id=mensaje>Escribe todos los datos por favor</p>";
    }

    else {
        for (var i = 0; i < usuarios.length; i++) {
            if ((admin == usuarios[i][1]) && (password == usuarios[i][3])) {
                usuariocorrecto = true;
                var usuarioON = usuarios[i].correo;
            }
        }
        if (usuariocorrecto == true) {
            localStorage.setItem('activo',admin);
            location.href = "admin.html";
        }
    }
}
function logOut(){
      localStorage.removeItem('activo');
      location.href = "index.html";    
}

