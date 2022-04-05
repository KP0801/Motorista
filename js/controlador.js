var usuario=[
  {  nombre,
    telefono,
    correo:'',
    password:'',
  }
   
    
  
];
var correo2;
var password2;


var localStorage=Window.localStorage;


function guardarUsuario() {
 
 usuario.nombre= document.getElementById('nombre').value;
  usuario.telefono=document.getElementById('telefono').value;
  usuario.correo=document.getElementById('correo').value;
  usuario.password=document.getElementById('password').value;
  console.log(usuario.nombre);
  console.log(usuario.password);
  console.log(usuario.correo);
};

function terminarRegistro(){
  usuario.correo=document.getElementById('correo').value;
  usuario.password=document.getElementById('password').value;
  document.getElementById('terminarRegistro').innerHTML +=`
  <div class="text-center col-12 mt-5 fw-bold " style="font-size: 2rem;">¡Ahora ya puedes disfrutar de Planet Express! </div>
  <br>
  <div class="mt-5" >
    <img style="width: 50%; margin-left: 30%;" class="posicionLogo"src="img/planet express 1.png" >
  </div>
 
  <div id="inicio2" class=" col-12 mt-5 : fw-bold fs-3 " >
  Tu usario es:   </div>
  <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
      <div class="fs-2" style="color: #5A993C;"> ${usuario.correo}</div>
  </div>
  
  <div class=" col-12 mt-5 : fw-bold fs-3 " >
      Tu contaseña  es:   </div>
      <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
          <div class="fs-2" style="color: #5A993C;"> ${usuario.password}</div>
  <br>
          <a href="login.html"><button type="button" class="btn btn-primary"  style=" width: 15rem; height: 3rem;  8rem; font-size: 20px; "  >
        Comenzar!
    </button></a>
      </div>
      
   
  `
}
terminarRegistro();

function nombreInicio(){

  document.getElementById('nombreInicio').innerHTML = `
  <div  class=" text-center fw-bold mt-5" style="font-size: 3rem;"> Hola ${usuario.nombre}</div>
  `

}
nombreInicio();



function verificarLogin(){

  correo2 = document.getElementById('correo2').value;
  password2 = document.getElementById('password2').value;

  if (correo2==usuario.correo) {

    if (password2==usuario.password) {
        window.location.replace("inicio2.html")
    }else{
      window.alert("Contraseña incorrecta");
    }

  }else{
    window.alert("Usuario incorrecto");
  }

}