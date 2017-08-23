// A $( document ).ready() block.
$( document ).ready(function() {
   /*crear usuario Admin*/

admin();
    });

     
function admin(){
  var usuarios = JSON.parse(localStorage.getItem('usuario'));
  if(!usuarios){
  usuarios = new Array();
  }

  for (var i = 0;i < usuarios.length; i++) {
    if (usuarios[i].length == "null") {

    }
  }
  var admin =new Array();
  if (typeof(Storage) !== "undefined") {
  admin[1] = "admin";
  admin[3] = "admin";
  usuarios.push(admin);
  localStorage.setItem("usuario", JSON.stringify(usuarios));

   
  }
}          



