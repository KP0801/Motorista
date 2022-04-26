


   function obtenerMotorista(){
    axios({
      method:'GET',
      url:'../../Backend/api/motoristas.php',
      responseType:'json'

    }) .then(res=>{
      
      this.motoristas = res.data;
      
     
      
  }).catch(error=>{
      console.error(error);
      
      
  })


 }


function registro2T(){
    
   
    document.getElementById('registro2').innerHTML =`
     
     <div class="text-center col-12 mt-5 fw-bold " style="font-size: 2rem; color:black;">¡Ahora ya puedes disfrutar de Planet Express! </div>
     <br>
     <div class="mt-5" >
       <img style="width: 50%; margin-left: 30%;" class="posicionLogo"src="img/planet express 1.png" >
     </div>
    
     <div id="inicio2" class=" col-12 mt-5 : fw-bold fs-3 " style="color:black;" >
     Tu usario es:   </div>
     <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
         <div class="fs-2" style="color: #5A993C;"> elbicho@gmail.com </div>
     </div>
     
     <div class=" col-12 mt-5 : fw-bold fs-3 "style="color:black;" >
         Tu contaseña  es:   </div>
         <div class="white-box " style="width: 20rem; margin-left: 0; height: 3rem;" >
             <div class="fs-2" style="color: #5A993C;">12345678</div>
     <br>
             <a href="login.html"><button type="button" class="btn btn-primary"  style=" width: 15rem; height: 3rem;   font-size: 20px; "  >
           Comenzar!
       </button></a>
         </div>
      
     `
     
    }
   
   registro2T();