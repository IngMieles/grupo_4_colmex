document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#email').addEventListener('keydown', () => load_emailName());
    document.querySelector('#password').addEventListener('keydown', () => load_password());
  
    // Por default no mostrar
    document.querySelector('#frontEmail').style.display = 'none';
    document.querySelector('#frontPassword').style.display = 'none';
  
  });
    
    var email = false;
    function load_emailName() {
      
      const correo = document.querySelector('#email');
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      
      if(!regex.test(correo.value)){
        document.querySelector('#frontEmail').style.display = 'block';
      }else{
        document.querySelector('#frontEmail').style.display = 'none';
        email = true;
      }
    }
    
      var password = false;
      function load_password() {
    
        const name = document.querySelector('#password');
        
        if(name.value.length < 7){
            document.querySelector('#frontPassword').style.display = 'block';
        }else{
            document.querySelector('#frontPassword').style.display = 'none';
            password = true;
        }
      }

        // Validación antes de enviar el formulario
window.addEventListener('load', function(e){
  var formulario = document.querySelector('#formLogin');
  formulario.addEventListener('submit',(evento)=>{
    if(!email){
      this.alert('Falta el campo de Usuario ingre tú "correo electrónico"!!!');
      evento.preventDefault();
    }else if(!password){
      this.alert('Falta el campo de "contraseña"!!!');
      evento.preventDefault();
    }
  });
});