document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#name').addEventListener('keydown', () => load_name());
    document.querySelector('#description').addEventListener('keydown', () => load_description());
    document.querySelector('#fileImg').addEventListener('click', () => load_fileImg());
    
    // Cuando escriben sobre el input
    document.querySelector('#name').addEventListener('blur', () => blur_name());
    document.querySelector('#description').addEventListener('blur', () => blur_description());

    // Por default no mostrar
    document.querySelector('#frontName').style.display = 'none';
    document.querySelector('#frontDescription').style.display = 'none';
    document.querySelector('#frontFileImg').style.display = 'none';
    
    const fileImg = document.getElementById('fileImg');
    fileImg.addEventListener('mouseover',()=>document.querySelector('#frontFileImg').style.display = 'block')
    fileImg.addEventListener('mouseout',()=>document.querySelector('#frontFileImg').style.display = 'none')
  });

  var formName = false;
  function load_name() {
    
    const name = document.querySelector('#name');
    
    if(name.value.length < 4){
        document.querySelector('#frontName').style.display = 'block';
    }else{
        document.querySelector('#frontName').style.display = 'none';
        formName = true;
    }
  }
  
  function blur_name() {
    const name = document.querySelector('#name');
    if(name.value.length < 4){
        alert('Este campo no puede estar vacio!!!')
    }
  }

  var description = false;
  function load_description() {
    
    const name = document.querySelector('#description');
    
    if(name.value.length < 19){
        document.querySelector('#frontDescription').style.display = 'block';
    }else{
        document.querySelector('#frontDescription').style.display = 'none';
        description = true;
    }
  }
  
  function blur_description() {
    const name = document.querySelector('#description');
    if(name.value.length < 1){
        alert('Este campo no puede estar vacio!!!')
    }else{
      document.querySelector('#frontDescription').style.display = 'none';
      description = true;
  }
  }

  function load_fileImg() {
    document.querySelector('#frontFileImg').style.display = 'block';
  }

    // Validación antes de enviar el formulario
window.addEventListener('load', function(e){
  var formulario = document.querySelector('#formCrear');
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