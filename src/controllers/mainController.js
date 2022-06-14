const path = require('path');
let fs = require('fs');
let dataProducts = require('../data/products');
let dataUsers = require('../data/users');
const productsFilePath = path.join(__dirname, '../data/products.json');
const ofertasFilePath = path.join(__dirname, '../data/ofertas.json');
const destacadosFilePath = path.join(__dirname, '../data/destacados.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

let fileOfertas = fs.readFileSync(ofertasFilePath, 'utf-8');
let ofertas = JSON.parse(fileOfertas);
let fileDestacados = fs.readFileSync(destacadosFilePath, 'utf-8');
let destacados = JSON.parse(fileDestacados);

const {validationResult} = require('express-validator');

const controller = {
    index: (req, res) => {
        let userID = req.userID;
        res.render('index', {ofertas,destacados,userID});
    },
    carritoCompras: (req, res) => {
        let userID = req.userID;
        res.render('carritoCompras',{userID});
    },
    categorias: (req, res) => {
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let newProducts = JSON.parse(product);
        let userID = req.userID;
        res.render('categorias', {newProducts,userID});
    },
    crearLista: (req, res) => {
        let userID = req.userID;
        res.render('crearLista',{userID});
    },
    crear: (req, res) => {
        let products;
        if (req.file) {
            products = {
                id: dataProducts.length,
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                fileImg: req.file.filename
            };
        } else if (req.body.img) {
            products = {
                id: dataProducts.length,
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                img: req.body.img
            }
        } else {
            products = {
                id: dataProducts.length,
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                fileImg: 'default-image.png'
            }
        }

        let newProduct;
        let readProducts = fs.readFileSync(productsFilePath,'utf-8');
        if (readProducts == "") {
            newProduct = [];
        } else {
            newProduct = JSON.parse(readProducts);
        }
        newProduct.push(products);
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));
        res.redirect('/categorias');
    },
    edita: (req, res) => {
        let idProduct = req.params.id;
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let Products = JSON.parse(product);
        const productoImg = Products.find(element => element.id == idProduct);
        let userID = req.userID;
        res.render('edita',{productoImg,userID});
    },
    editar: (req, res) => {
        let idProduct = req.params.id;
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let Products = JSON.parse(product);
        let productoImg = Products.find(element => element.id == idProduct);
        let userID = parseInt(req.body.userId);
        let editProduct;
        if (req.file) {
            editProduct = {
                id: parseInt(idProduct),
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                fileImg: req.file.filename
            };
        } else if (req.body.img) {
            editProduct = {
                id: parseInt(idProduct),
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                img: req.body.img
            }
        } else if (productoImg.fileImg) {
            editProduct = {
                id: parseInt(idProduct),
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                fileImg: productoImg.fileImg
            }
        } else if (productoImg.img) {
            editProduct = {
                id: parseInt(idProduct),
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                img: productoImg.img
            }
        } else {
            editProduct = {
                id: parseInt(idProduct),
                ...req.body,
                userId: parseInt(req.body.userId),
                precio: parseInt(req.body.precio),
                fileImg: 'default-image.png'
            }
        }

        let newProduct;
        let readProducts = fs.readFileSync(productsFilePath,'utf-8');
        if (readProducts == "") {
            newProduct = [];
        } else {
            newProduct = JSON.parse(readProducts);
        }

        newProduct.forEach((element,index) => {
            if(element.id==editProduct.id){
                newProduct[index] = editProduct;
            }
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));
        product = fs.readFileSync(productsFilePath, 'utf-8');
        Products = JSON.parse(product);
        productoImg = Products.find(element => element.id == idProduct);
        userID = req.userID;
        res.render('detalleProducto',{productoImg,userID});
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let Products = JSON.parse(product);

        Products.splice(idProduct, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(Products, null, ' '));
        res.redirect('/categorias');
        // res.redirect('/detalleProducto/' + idProduct );
    },
    detalleProducto: (req, res) => {
        let idProduct = req.params.id;
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let Products = JSON.parse(product);
        const productoImg = Products.find(element => element.id == idProduct);
        let userID = req.userID;
        res.render('detalleProducto', {productoImg,userID});
    },
    login: (req, res) => {
        let userID = req.userID;
        res.render('login',{userID});
    },
    registro: (req, res) => {
        let userID = req.userID;
        res.render('registro',{userID});
    },
    registerUsers: (req, res) => {
        let users;
        let errors = validationResult(req);
        if(errors.isEmpty()){
            if (req.file) {
                users = {
                    id: dataUsers.length,
                    telefono: parseInt(req.body.telefono),
                    ...req.body,
                    fileImg: req.file.filename,
                };
            } else {
                users = {
                    id: dataUsers.length,
                    telefono: parseInt(req.body.telefono),
                    ...req.body,
                    fileImg: 'default-user.jpg',
                }
            }
    
            let newUser;
            let readUsers = fs.readFileSync(usersFilePath,'utf-8');
            if (readUsers == "") {
                newUser = [];
            } else {
                newUser = JSON.parse(readUsers);
            }
    
            newUser.push(users);
            fs.writeFileSync(usersFilePath, JSON.stringify(newUser, null, ' '));
            let userID = req.userID;
            res.render('login',{userID});
        }else{
            let userID = req.userID;
            res.render('registro',{userID,errors:errors.array()});
        }
        
    },
};

module.exports = controller;