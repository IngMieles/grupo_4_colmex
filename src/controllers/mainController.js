const productos = require('../controllers/productos'); 
const ofertas = require('../controllers/ofertas'); 
const destacados = require('../controllers/destacados'); 

const controller = {
    index: (req,res)=>{
        res.render('index',{'productos':productos,'ofertas':ofertas,'destacados':destacados});
    },
    carritoCompras: (req,res)=>{
        res.render('carritoCompras');
    },
    categorias: (req,res)=>{
        res.render('categorias',{'productos':productos});
    },
    crearLista: (req,res)=>{
        res.render('crearLista');
    },
    edita: (req,res)=>{
        res.render('edita');
    },
    detalleProducto: (req,res)=>{
        let idProduct = req.params.id;
        const productoImg = productos.find(element =>element.id == idProduct);
        res.render('detalleProducto',{'productoImg':productoImg});
    },
    login: (req,res)=>{
        res.render('login');
    },
    registro: (req,res)=>{
        res.render('registro');
    },
};

module.exports = controller;