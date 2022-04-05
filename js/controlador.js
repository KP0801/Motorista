var usuario =
{
  nombre: '',
  telefono: '',
  correo: '',
  password: '',
};

var ordenes = {
  restaurante: 'Mcdonalds',
  dirrecion: 'col.Suyapa ,sector 3',
  productos: [
    {
      nombreProducto: 'Duo Crispy',
      precio: 129.00,
    },
    {
      nombreProducto: 'Big Mac',
      precio: 161.00,
    }
  ]



}



console.log(ordenes.productos[1].nombreProducto);
var correo2 = " ";
var password2 = " ";


var localStorage = Window.localStorage;


function guardarUsuario() {
  
  usuario.nombre = document.getElementById('nombre').value;
  usuario.telefono = document.getElementById('telefono').value;
  usuario.correo = document.getElementById('correo').value;
  usuario.password = document.getElementById('password').value;
  console.log(usuario.nombre);
  console.log(usuario.password);
  console.log(usuario.correo);


};


 








function verificarLogin() {

  correo2 = document.getElementById('correo').value;
  password2 = document.getElementById('password').value;

  if (correo2 == usuario.correo) {

    if (password2 == usuario.password) {
      window.location.replace("inicio2.html")
    } else {
      window.alert("Contraseña incorrecta");
    }

  } else {
    window.alert("Usuario incorrecto");
  }

};

function ordenesD() {

  document.getElementById('ordenes').innerHTML = `
  <div class="container-1">
  <br>
  <br>
  <br>
  <br>   
<div class="fs-1 fw-bold"> 
  Orden#1
</div>
<br>
<div class="fs-3 fw-bold"> 
  Empresa de compra:
</div>
<div class="fs-3 " style="color:#FFFFFE ;" >
  ${ordenes.restaurante}
</div>
<br>
<div class="fs-3 fw-bold"> 
  Dirrecion de entrega:
</div>
<div class="fs-3 " style="color:#FFFFFE ;" >
  ${ordenes.dirrecion}
</div>
<br>
<div class="fs-3 fw-bold"> 
  Producos a comprar:
</div>
<div class="fs-3 " style="color:#FFFFFE ;" >
  ${ordenes.productos[0].nombreProducto} : ${ordenes.productos[0].precio}lps
  
</div>
<div class="fs-3 " style="color:#FFFFFE ;" >
  ${ordenes.productos[1].nombreProducto} : ${ordenes.productos[1].precio}lps
</div>
<br>
<div class="fs-3 fw-bold"> 
  Subtotal--------${ordenes.productos[0].precio}+${ordenes.productos[1].precio}
</div>
  `
}
ordenesD();


