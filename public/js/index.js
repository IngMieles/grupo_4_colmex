window.addEventListener('load', function() {
    // const usuarioLogin = req.session.userID;
    // console.log(primerMiddleware);
    
    // fetch('http://localhost:3001/api/users/', {method:'get'})
    //   .then(response => response.json())
    //   .then(data => {
        //         document.querySelector('#notificacion').style.display = 'block';
        //         document.querySelector('#notificacion').innerHTML = '1';
        //   })
        //   .catch(err => console.log(err));
        //   }
        
        // console.log(locals.userID);
        
    // document.querySelector('#notificacionHead').style.display = 'nome';

    fetch('http://localhost:3001/api/users/notification')
    .then(response => response.json())
    .then(data => {
        if(data.length == 0){
            document.querySelector('#notificacionHead  b').innerHTML = '';
        }else{
            document.querySelector('#notificacionHead  b').innerHTML = '('+data.length+')';
        }
    })
    .catch(error=>console.error(error));

    // document.querySelector('#notificacionHead').addEventListener('keydown', () => load_notificacion());

    // location.reload();
    // let userName = document.querySelector('#userName');
    // console.log(userName.innerText);

    // sessionStorage.setItem('userName',userName.innerText);
    // console.log('session');
    // console.log(sessionStorage.getItem('userName'));
    // console.log('Hola mundo de front-end!');
    // console.log('Archivo index.js');

    // const fname = document.getElementById('fname');
    
    // fname.addEventListener('mouseover',()=>console.log('mouseover'))
    // console.log(fname);
    
    
    // fname.addEventListener('blur',()=>this.alert('Este campo no puede estar vacio!!!'))
    // const fnameAlerta = document.getElementById('fname').innerHTML;

    

    // const labels = document.querySelectorAll('label');

    // for (const label of labels) {
    //     if(label.textContent == 'Nombre '){
    //         console.log(label.textContent);
    //         // label.innerHTML += 'Hola mundo';
    //         console.log(label.textContent.length);
    //     }
    //     // console.log(label.textContent);
    // }

    // let miInput = document.querySelector('#fname');
    //     miInput.onkeydown = function(event){
    //     alert("Se presionó la tecla: "+ event.key);
    // }
});

// window.addEventListener("keypress", function(e){
//     alert(1);
//     console.log(e.key);
// })
// let aux = true;

// function load_notificacion(){
//     document.querySelector('#notificacionHead  b').innerHTML = '';
//     aux = false;
//   }