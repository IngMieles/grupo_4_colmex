document.addEventListener('DOMContentLoaded', function() {

  // Cuando escriben sobre el input
  document.querySelector('#fname').addEventListener('keydown', () => load_fistName());
  document.querySelector('#lname').addEventListener('keydown', () => load_lastName());
  document.querySelector('#email').addEventListener('keydown', () => load_emailName());
  document.querySelector('#password').addEventListener('keydown', () => load_password());
  document.querySelector('#fileImg').addEventListener('click', () => load_fileImg());

  // Por default no mostrar
  document.querySelector('#frontFname').style.display = 'none';
  document.querySelector('#frontLname').style.display = 'none';
  document.querySelector('#frontEmail').style.display = 'none';
  document.querySelector('#frontPassword').style.display = 'none';
  document.querySelector('#frontFileImg').style.display = 'none';

});
  
  function load_fistName() {
    
    const name = document.querySelector('#fname');
    
    if(name.value.length < 2){
        document.querySelector('#frontFname').style.display = 'block';
    }else{
        document.querySelector('#frontFname').style.display = 'none';
    }
  }

  function load_lastName() {

    const name = document.querySelector('#lname');
    
    if(name.value.length < 2){
        document.querySelector('#frontLname').style.display = 'block';
    }else{
        document.querySelector('#frontLname').style.display = 'none';
    }
  }
  
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
  
  function load_fileImg() {
  
    document.querySelector('#frontFileImg').style.display = 'block';
  }