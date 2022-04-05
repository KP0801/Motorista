/*var usuario2 =
{
  nombre: '',
  telefono: '',
  correo: '',
  password: '',
};



function guardar() {
 var expReg = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  usuario2.nombre = document.getElementById('nombre').value;
  usuario2.telefono = document.getElementById('telefono').value;
  usuario2.correo = document.getElementById('correo').value;
  usuario2.password = document.getElementById('password').value;
    console.log('java2',usuario.correo);

  var valido = expReg.test(usuario.correo);
  if (valido) {
    window.open("terminarRegistro.html", "_self");
  } else {
    window.alert("Correo no valido");
  }
}

function registro2T(){
    console.log(usuario2.correo);
   
    document.getElementById('registro2').innerHTML =`
     
     <div class="text-center col-12 mt-5 fw-bold " style="font-size: 2rem; color:black;">¡Ahora ya puedes disfrutar de Planet Express! </div>
     <br>
     <div class="mt-5" >
       <img style="width: 50%; margin-left: 30%;" class="posicionLogo"src="img/planet express 1.png" >
     </div>
    
     <div id="inicio2" class=" col-12 mt-5 : fw-bold fs-3 " style="color:black;" >
     Tu usario es:   </div>
     <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
         <div class="fs-2" style="color: #5A993C;"> ${usuario2.correo}</div>
     </div>
     
     <div class=" col-12 mt-5 : fw-bold fs-3 "style="color:black;" >
         Tu contaseña  es:   </div>
         <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
             <div class="fs-2" style="color: #5A993C;"> ${usuario2.password}</div>
     <br>
             <a href="login.html"><button type="button" class="btn btn-primary"  style=" width: 15rem; height: 3rem;   font-size: 20px; "  >
           Comenzar!
       </button></a>
         </div>
      
     `
     
    }
   
   registro2T(); */