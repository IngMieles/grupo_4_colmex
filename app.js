const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000,() => console.log('Servidor activo...'));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views/index.html')));
app.get('/detalleProducto',(req,res) => res.sendFile(path.resolve(__dirname,'views/detalleProducto.html')));
app.get('/carritoCompras',(req,res) => res.sendFile(path.resolve(__dirname,'views/carritoCompras.html')));
app.get('/registro',(req,res) => res.sendFile(path.resolve(__dirname,'views/registro.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views/login.html')));
app.get('/crearLista',(req,res) => res.sendFile(path.resolve(__dirname,'views/crearLista.html')));
app.get('/categorias',(req,res) => res.sendFile(path.resolve(__dirname,'views/categorias.html')));