var usuario=[
    nombre,
    telefono,
    correo,
    domicilio
    
  
];

var localStorage=Window.localStorage;


function guardarUsuario() {
 
  usuario.nombre= document.getElementById('nombre').value;
  usuario.telefono=document.getElementById('telefono').value;
  usuario.correo=document.getElementById('correo').value;
  usuario.domicilio=document.getElementById('domicilio').value;
    
    

  
};