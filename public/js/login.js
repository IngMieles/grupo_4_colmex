document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#email').addEventListener('keydown', () => load_emailName());
    document.querySelector('#password').addEventListener('keydown', () => load_password());
  
    // Por default no mostrar
    document.querySelector('#frontEmail').style.display = 'none';
    document.querySelector('#frontPassword').style.display = 'none';
  
  });
    
    function load_emailName() {
      
      const correo = document.querySelector('#email');
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      
      if(!regex.test(correo.value)){
        document.querySelector('#frontEmail').style.display = 'block';
      }else{
        document.querySelector('#frontEmail').style.display = 'none';
      }
    }
    
      function load_password() {
    
        const name = document.querySelector('#password');
        
        if(name.value.length < 7){
            document.querySelector('#frontPassword').style.display = 'block';
        }else{
            document.querySelector('#frontPassword').style.display = 'none';
        }
      }