const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const mainProducto = require('./routes/mainProducto');

app.set('view engine','ejs');

app.use(express.static('public'));

app.set('views',path.resolve(__dirname,'./views'));

app.use('/', mainRouter);
app.use('/detalleProducto', mainProducto);

app.listen(3000,() => console.log('Servidor activo en el puerto 3000...'));
