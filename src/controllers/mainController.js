let fs = require('fs');
let productos = require('../controllers/productos'); 
let dataProducts = require('../data/products'); 
let ofertas = require('../controllers/ofertas'); 
let destacados = require('../controllers/destacados'); 

const controller = {
    index: (req,res)=>{
        res.render('index',{'productos':productos,'ofertas':ofertas,'destacados':destacados});
    },
    carritoCompras: (req,res)=>{
        res.render('carritoCompras');
    },
    categorias: (req,res)=>{
        let product = fs.readFileSync('src/data/products.json',{encoding: 'utf-8'});
        let newProducts = JSON.parse(product);
        res.render('categorias',{productos,newProducts});
        // res.render('categorias',{productos});
    },
    crearLista: (req,res)=>{
        res.render('crearLista');
    },
    crear: (req,res)=>{

        let products = {
            id: dataProducts.length,
            name: req.body.name,
            precio: req.body.precio,
            categoria: req.body.categoria,
            img: req.body.img,
            file: '../img/'+ req.body.file,
            description: req.body.description,
        };


        let newProduct;
        let readProducts = fs.readFileSync('src/data/products.json',{encoding: 'utf-8'});
        if (readProducts == ""){
            newProduct = [];
        }else{
            newProduct = JSON.parse(readProducts);
        }
        
        newProduct.push(products);

        let productJSON = JSON.stringify(newProduct);
        fs.writeFileSync('src/data/products.json',productJSON);
        
        res.redirect('/');
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