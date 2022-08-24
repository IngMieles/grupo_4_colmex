window.addEventListener('load', function() {

    // console.log('Hola mundo de front-end!');
    // console.log('Archivo index.js');

    // const fname = document.getElementById('fname');
    const fileImg = document.getElementById('fileImg');

    // fname.addEventListener('mouseover',()=>console.log('mouseover'))
    // console.log(fname);
    fileImg.addEventListener('mouseover',()=>document.querySelector('#frontFileImg').style.display = 'block')
    fileImg.addEventListener('mouseout',()=>document.querySelector('#frontFileImg').style.display = 'none')
    
    // fname.addEventListener('blur',()=>this.alert('Este campo no puede estar vacio!!!'))
    // const fnameAlerta = document.getElementById('fname').innerHTML;

    

    const labels = document.querySelectorAll('label');

    for (const label of labels) {
        if(label.textContent == 'Nombre '){
            console.log(label.textContent);
            // label.innerHTML += 'Hola mundo';
            console.log(label.textContent.length);
        }
        // console.log(label.textContent);
    }

    // let miInput = document.querySelector('#fname');
    //     miInput.onkeydown = function(event){
    //     alert("Se presionó la tecla: "+ event.key);
    // }
});

// window.addEventListener("keypress", function(e){
//     alert(1);
//     console.log(e.key);
// })