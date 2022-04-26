
   var motorista=[];



   function obtenerMotorista(){
      axios({
        method:'GET',
        url:'../../Backend/api/motoristas.php',
        responseType:'json'

      }) .then(res=>{
        
        this.motoristas = res.data;
        
        imprimirPerfil();
        
        
    }).catch(error=>{
        console.error(error);
        
        
    })


   }
 obtenerMotorista();
    

function imprimirPerfil(){
   

  
  const el =document.getElementById('mostrarInfo');
    console.log(el);
   el.innerHTML=`
    <div  class="text-center col-12  mt-5 fw-bold w-75 " style=" font-size: 3rem;"  > ${motoristas.nombreMotorista} ${motoristas.apellidoMotorista} </div>
    <br>
  
   
      <div class="fs-3 " style="color:#FFFFFE ;" >
        Tu informacion:
      </div>
      <br>
      <br>
    <div class="fs-3 fw-bold"> 
        Id:
      </div>
      <div class="fs-3 " style="color:#FFFFFE ;" >
        ${motoristas.idMotorista}

      </div>
  
      <br>
      <div class="fs-3 fw-bold"> 
          Correo Electronico:
        </div>
        <div class="fs-3 " style="color:#FFFFFE ;" >
          ${motoristas.correo}
        </div>
  
        <br>
    
    
  </div>
    `;
  
  }
