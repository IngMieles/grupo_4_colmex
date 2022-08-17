window.addEventListener('load', function() {

    // console.log('Hola mundo de front-end!');
    console.log('Archivo index.js');

    const fname = document.getElementById('fname');

    console.log(fname);

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
  
});