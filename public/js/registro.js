document.addEventListener('DOMContentLoaded', function() {

  // Cuando escriben sobre el input
  document.querySelector('#fname').addEventListener('keydown', () => load_fistName());
  document.querySelector('#lname').addEventListener('keydown', () => load_lastName());
  document.querySelector('#email').addEventListener('keydown', () => load_emailName());
  document.querySelector('#password').addEventListener('keydown', () => load_password());
  document.querySelector('#fileImg').addEventListener('click', () => load_fileImg());

  // Cuando click fuera del input
  document.querySelector('#fname').addEventListener('blur', () => blur_fistName());
  document.querySelector('#lname').addEventListener('blur', () => blur_lastName());
  document.querySelector('#email').addEventListener('blur', () => blur_emailName());
  document.querySelector('#password').addEventListener('blur', () => blur_password());

  // Por default no mostrar
  document.querySelector('#frontFname').style.display = 'none';
  document.querySelector('#frontLname').style.display = 'none';
  document.querySelector('#frontEmail').style.display = 'none';
  document.querySelector('#frontPassword').style.display = 'none';
  document.querySelector('#frontFileImg').style.display = 'none';

});

  var fname = false;
  function load_fistName() {
    
    const name = document.querySelector('#fname');
    
    if(name.value.length < 1){
        document.querySelector('#frontFname').style.display = 'block';
    }else{
        document.querySelector('#frontFname').style.display = 'none';
        fname = true;
    }
  }

  function blur_fistName() {
    const name = document.querySelector('#fname');
    if(name.value.length < 2){
        alert('Este campo no puede estar vacio!!!')
    }
  }

  var lname = false;
  function load_lastName() {

    const name = document.querySelector('#lname');
    
    if(name.value.length < 1){
        document.querySelector('#frontLname').style.display = 'block';
    }else{
        document.querySelector('#frontLname').style.display = 'none';
        lname = true;
    }
  }
  
  function blur_lastName() {
    const name = document.querySelector('#lname');
    if(name.value.length < 2){
        alert('Este campo no puede estar vacio!!!')
    }
  }

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
  
  function blur_emailName() {

    const correo = document.querySelector('#email');
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    if(!regex.test(correo.value)){
      alert('Este campo no puede estar vacio!!!')
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
  
  function blur_password() {
    const name = document.querySelector('#password');
    if(name.value.length < 7){
        alert('Este campo no puede estar vacio!!!')
    }
  }

  function load_fileImg() {
    document.querySelector('#frontFileImg').style.display = 'block';
  }

  // Validación antes de enviar el formulario
window.addEventListener('load', function(e){
  var formulario = document.querySelector('#formRegistro');
  formulario.addEventListener('submit',(evento)=>{
    if(!fname){
      this.alert('Falta el campo "Nombre"!!!');
      evento.preventDefault();
    }else if(!lname){
      this.alert('Falta el campo "Apellido"!!!');
      evento.preventDefault();
    }else if(!email){
      this.alert('Falta el campo de "correo electronico"!!!');
      evento.preventDefault();
    }else if(!password){
      this.alert('Falta el campo de "contraseña"!!!');
      evento.preventDefault();
    }
  });
});