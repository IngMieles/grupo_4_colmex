const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const mainProducto = require('./routes/productRouter');
const mainUsers = require('./routes/UserRouter');
const methodOverride = require('method-override');

const session = require('express-session');
app.use(session( {secret: "colmex"}));

var primerMiddleware = require('../middlewares/middleware');
var recuerdameMiddleware = require('../middlewares/recuerdameMiddleware');
var cookieParser = require('cookie-parser');
app.use(primerMiddleware);

app.use(methodOverride('_method')); 

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(recuerdameMiddleware);

app.set('views',path.resolve(__dirname,'./views'));

app.use('/', mainRouter);
app.use('/detalleProducto', mainProducto);
app.use('/registro', mainUsers);

app.listen(3000,() => console.log('Servidor activo en el puerto 3000...'));

app.use((req, res, next) => {
    let userID = req.userID;
    res.status(404).render('not-found',{userID});
})