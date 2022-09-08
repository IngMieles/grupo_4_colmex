document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#name').addEventListener('keydown', () => load_name());
    document.querySelector('#description').addEventListener('keydown', () => load_description());
    document.querySelector('#fileImg').addEventListener('click', () => load_fileImg());

    // Cuando dan click fuera del input
    document.querySelector('#name').addEventListener('blur', () => blur_name());
    document.querySelector('#description').addEventListener('blur', () => blur_description());
  
    // Por default no mostrar
    document.querySelector('#editaName').style.display = 'none';
    document.querySelector('#editaDescription').style.display = 'none';
    document.querySelector('#editaFileImg').style.display = 'none';
  
  });

  var formName = false;
  function load_name() {
    
    const name = document.querySelector('#name');
    
    if(name.value.length < 4){
        document.querySelector('#editaName').style.display = 'block';
    }else{
        document.querySelector('#editaName').style.display = 'none';
        formName = true;
    }
  }

  function blur_name() {
    const name = document.querySelector('#name');
    if(name.value.length < 4){
        document.querySelector('#editaName').style.display = 'block';
        document.querySelector('#editaName b').innerHTML = 'El campo Nombre no puede estar vacio y debe tener al menos 5 caracteres';
    }
  }

  var description = false;
  function load_description() {
    
    const name = document.querySelector('#description');
    
    if(name.value.length < 19){
        document.querySelector('#editaDescription').style.display = 'block';
    }else{
        document.querySelector('#editaDescription').style.display = 'none';
        description = true;
    }
  }
  
  function blur_description() {
    const name = document.querySelector('#description');
    if(name.value.length < 19){
        document.querySelector('#editaDescription').style.display = 'block';
        document.querySelector('#editaDescription b').innerHTML = 'El campo Descripción no puede estar vacio y debe tener al menos 20 caracteres';
    }
  }

  function load_fileImg() {
    document.querySelector('#frontFileImg').style.display = 'block';
  }

      // Validación antes de enviar el formulario
window.addEventListener('load', function(e){
  var formulario = document.querySelector('#formEdita');
  formulario.addEventListener('submit',(evento)=>{
    if(!formName){
      this.alert('Falta el campo "Nombre"!!!');
      evento.preventDefault();
    }else if(!description){
      this.alert('Falta describir el producto!!!');
      evento.preventDefault();
    }
  });
});