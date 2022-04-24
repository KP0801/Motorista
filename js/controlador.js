var usuario =
{
  nombre: '',
  apellido:'',
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
  usuario.apellido= document.getElementById('apellido').value;
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


