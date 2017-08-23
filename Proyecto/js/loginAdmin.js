// A $( document ).ready() block.
$( document ).ready(function() {
   /*crear usuario Admin*/

admin();
 $( "#btn_log" ).click(function() {
        loguearse();
    });
});
     
function admin(){
 
  var usuarios = JSON.parse(localStorage.getItem('usuario'));

  if(!usuarios){
  usuarios = new Array();
  }

  var admin =new Array();
  if (typeof(Storage) !== "undefined") {
  admin[1] = "admin";
  admin[3] = "admin";
  usuarios.push(admin);
  localStorage.setItem("usuario", JSON.stringify(usuarios));
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



