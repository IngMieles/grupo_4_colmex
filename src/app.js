const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const mainProducto = require('./routes/productRouter');
const mainUsers = require('./routes/UserRouter');
const methodOverride = require('method-override');

// Configuración para mandar información al front-end
const cors = require("cors");
var corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));
  let allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', "*");
      res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
      res.header('Access-Control-Allow-Headers', "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      next();
    }
  app.use(allowCrossDomain);
//

const session = require('express-session');
app.use(session( {secret: "colmex", resave: false, saveUninitialized: false}));

var primerMiddleware = require('../middlewares/middleware');
var recuerdameMiddleware = require('../middlewares/recuerdameMiddleware');
var cookieParser = require('cookie-parser');

//Aquí llamo a la ruta de las api de UserRouter
const apiUserRouter = require('./routes/api/apiUserRouter')
//Aquí llamo a la ruta de las api de ProductRouter
const apiProductRouter = require('./routes/api/apiProductRouter')

app.use(methodOverride('_method')); 

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(primerMiddleware);
app.use(recuerdameMiddleware);

app.set('views',path.resolve(__dirname,'./views'));

app.use('/', mainRouter);
app.use('/detalleProducto', mainProducto);
app.use('/registro', mainUsers);

//Aquí creo la colección de recursos de UserRouter (APIs)
app.use('/api/users',apiUserRouter);
//Aquí creo la colección de recursos de ProductRouter (APIs)
app.use('/api/products/',apiProductRouter);

app.listen(3001,() => console.log('Servidor activo en el puerto 3001...'));

app.use((req, res, next) => {
    let userID = req.userID;
    res.status(404).render('not-found',{userID});
})