document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#email').addEventListener('keydown', () => load_emailName());
    document.querySelector('#password').addEventListener('keydown', () => load_password());
    
    // Cuando dan click fuera del input
    document.querySelector('#email').addEventListener('blur', () => blur_emailName());
    document.querySelector('#password').addEventListener('blur', () => blur_password());
    
    // click en input
    document.querySelector('#email').addEventListener('focus', () => focus_emailName());
    document.querySelector('#password').addEventListener('focus', () => focus_password());
    
    // click cuando cambio el input
    document.querySelector('#email').addEventListener('blur', () => change_emailName());
    document.querySelector('#password').addEventListener('blur', () => change_password());

    // Por default no mostrar
    document.querySelector('#frontEmail').style.display = 'none';
    document.querySelector('#frontPassword').style.display = 'none';
  
  });

  function focus_emailName(){
    var fname = document.querySelector('#email')
    fname.style.backgroundColor = 'pink';
  }

  function change_emailName(){
    var fname = document.querySelector('#email')
    fname.style.backgroundColor = 'white';
  }

  function focus_password(){
    var fname = document.querySelector('#password')
    fname.style.backgroundColor = 'pink';
  }

  function change_password(){
    var fname = document.querySelector('#password')
    fname.style.backgroundColor = 'white';
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
        // alert('El campo usuario no puede estar vacio!!!')
        document.querySelector('#frontEmail').style.display = 'block';
        document.querySelector('#frontEmail b').innerHTML = 'El campo usuario no puede estar vacio!!!';
      }else{
        document.querySelector('#frontEmail').style.display = 'none';
        email = true;

      fetch('http://localhost:3001/api/users/emailExist/'+correo.value, {method:'put'})
      .then(response => response.json())
      .then(data => {
        if(data.errors[0].msg == 'El correo no existe'){
            document.querySelector('#frontEmail').style.display = 'block';
            document.querySelector('#frontEmail b').innerHTML = 'No estás registrado con este correo. ¡Registrate!';
        }
      })
      .catch(err => console.log(err));
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
            // alert('Falta el campo de "contraseña"!!!')
            document.querySelector('#frontPassword').style.display = 'block';
            document.querySelector('#frontPassword b').innerHTML = 'El campo contraseña no puede estar vacio y debe tener al menos 8 caracteres';
        }
      }

// Validación antes de enviar el formulario
window.addEventListener('load', function(e){
  const formulario = document.querySelector('#formLogin');
  formulario.addEventListener('submit',(evento)=>{
    if(!email){
      this.alert('Falta el campo de Usuario ingresa tú "correo electrónico"!!!');
      evento.preventDefault();
    }
    if(!password){
      this.alert('Falta el campo de "contraseña"!!!');
      evento.preventDefault();
    }
    // Seleccionar la casilla de recordar usuario
    const recuerda = document.getElementById('recuerdame');
    if(!recuerda.checked && email && password){
      const confirmar = window.confirm('¿Estas seguro de que no quieres que se recuerde tú sesión?');
      if(!confirmar){
        evento.preventDefault();
      }
    }
  });
});