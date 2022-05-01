let express = require('express');

let app = express();

app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));

app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});