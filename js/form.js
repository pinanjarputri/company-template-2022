
  var nombre=document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
  var email=document.getElementById("correo");
  var telephone=document.getElementById("telephone");
  var tipoSeguro=document.getElementById("tiposeguro");


function iniciar(){
  
    nombre.addEventListener("blur", validarNombre, false);
    apellido.addEventListener("blur", validarApellido, false);
    email.addEventListener("blur", validarEmail, false);
    telephone.addEventListener("blur", validarTelephone, false);
    tipoSeguro.addEventListener("blur", validartiposeguro, false);


    }
    function validarNombre(){
        if(nombre.value==''){
            nombre.setCustomValidity('inserte su nombre');
              nombre.style.background='#fed136';
        }else{
            nombre.setCustomValidity('');
            nombre.style.background='#fd7e14';
        }
    }   
    function validarApellido(){
     if(apellido.value==''){
          apellido.setCustomValidity('inserte su apellido');
          apellido.style.background='#fed136';
     }else{
          apellido.setCustomValidity('');
          apellido.style.background='#fd7e14';
     }
 }  
    function validarTelephone(){
            if(telephone.value==''){
            telephone.setCustomValidity('inserte su teléfono');
            telephone.style.background='#fed136';
            }else{
            telephone.setCustomValidity('');
            telephone.style.background='#fd7e14';
            }
        }
    function validarEmail(){
        if(email.value==''){
            email.setCustomValidity('inserte su mail');
            email.style.background='#fed136';
        }else{
            email.setCustomValidity('');
            email.style.background='#fd7e14';
        }
    }

     function validartiposeguro(){
        if(tipoSeguro.value==0){
            tipoSeguro.setCustomValidity('Señale su opcion');
            tipoSeguro.style.background='#fed136';
        }else{
            tipoSeguro.setCustomValidity('');
            tipoSeguro.style.background='#fd7e14';
        }
    }



window.addEventListener("load", iniciar, false);
