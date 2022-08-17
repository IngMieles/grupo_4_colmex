document.addEventListener('DOMContentLoaded', function() {

    // Cuando escriben sobre el input
    document.querySelector('#name').addEventListener('keydown', () => load_name());
    document.querySelector('#description').addEventListener('keydown', () => load_description());
    document.querySelector('#fileImg').addEventListener('click', () => load_fileImg());
  
    // Por default no mostrar
    document.querySelector('#editaName').style.display = 'none';
    document.querySelector('#editaDescription').style.display = 'none';
    document.querySelector('#editaFileImg').style.display = 'none';
  
  });

  
  function load_name() {
    
    const name = document.querySelector('#name');
    
    if(name.value.length < 4){
        document.querySelector('#editaName').style.display = 'block';
    }else{
        document.querySelector('#editaName').style.display = 'none';
    }
  }
  
  function load_description() {
    
    const name = document.querySelector('#description');
    
    if(name.value.length < 19){
        document.querySelector('#editaDescription').style.display = 'block';
    }else{
        document.querySelector('#editaDescription').style.display = 'none';
    }
  }
  
  function load_fileImg() {
    
    // const name = document.querySelector('#fileImg');
    
    // if(name.value.length < 19){
        document.querySelector('#frontFileImg').style.display = 'block';
    // }else{
    //     document.querySelector('#frontFileImg').style.display = 'none';
    // }
  }