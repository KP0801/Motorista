function login (){
    $.ajax({
        url:'../../../Backend/api/login-motorista.php',
        method:'post',
        data:JSON.stringify({
           correo:document.getElementById('correo').value,
           password:document.getElementById('password').value

        }),
        dataType:'json',
        success:function(res){
            if (res.codigoResultado==1) {
                window.location.href="inicio2.html"
            }else{
                document.getElementById('error').style.display='block';
                document.getElementById('error').innerHTML=res.mensaje;
            }
            console.log(res)
        },
            error:function(error){
                console.error(error);
            }
    })
}