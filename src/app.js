const express = require('express');//
const path = require('path');//Unificar las rutas dentro de los distintos OS para identificar donde nos ubicamos y a donde queremos llegar
const app = express();//
const publicPath = path.resolve(__dirname, './public');//Dirname hace referencia a la ubicacion del archivo app, le indico que busque desde la raiz que busque la carpeta public

app.use(express.static(publicPath))//Utilizamos la funcion static del objeto express, recibe la ruta de la carpeta donde se encuentran los archivos publicos

app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

