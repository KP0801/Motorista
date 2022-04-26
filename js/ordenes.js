
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



function ordenesD() {
   

    let stringHTML=`
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
  <br>
  <br>
  <br>
  <br>
  <div><button class="btn btn-primary"  style="margin-left: 50% ; width: 100%;" > ACEPTAR ORDEN </button></div>



    `
    
   document.getElementById('ordenes').innerHTML=stringHTML;
  }
   ordenesD();