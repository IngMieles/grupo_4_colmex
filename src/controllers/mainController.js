const path = require('path');
let fs = require('fs');
let dataProducts = require('../data/products');
let dataUsers = require('../data/users');
const productsFilePath = path.join(__dirname, '../data/products.json');
const ofertasFilePath = path.join(__dirname, '../data/ofertas.json');
const destacadosFilePath = path.join(__dirname, '../data/destacados.json');

const usersFilePath = path.join(__dirname, '../data/users.json');
let usersLogin = fs.readFileSync(usersFilePath, 'utf-8');
let userLogin = JSON.parse(usersLogin);

let fileOfertas = fs.readFileSync(ofertasFilePath, 'utf-8');
let ofertas = JSON.parse(fileOfertas);
let fileDestacados = fs.readFileSync(destacadosFilePath, 'utf-8');
let destacados = JSON.parse(fileDestacados);

const controller = {
    index: (req, res) => {
        res.render('index', {
            'ofertas': ofertas,
            'destacados': destacados
        });
    },
    carritoCompras: (req, res) => {
        res.render('carritoCompras');
    },
    categorias: (req, res) => {
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let newProducts = JSON.parse(product);
        res.render('categorias', {
            newProducts
        });
    },
    crearLista: (req, res) => {
        let userID = userLogin.find(element =>element.id == 0);
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
        res.render('edita',{productoImg});
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
        console.log(productoImg);
        res.render('detalleProducto',{productoImg,userID});
    },
    detalleProducto: (req, res) => {
        let idProduct = req.params.id;
        let product = fs.readFileSync(productsFilePath, 'utf-8');
        let Products = JSON.parse(product);
        const productoImg = Products.find(element => element.id == idProduct);
        let userID = userLogin.find(element =>element.id == 0);
        res.render('detalleProducto', {productoImg,userID});
    },
    login: (req, res) => {
        res.render('login');
    },
    registro: (req, res) => {
        res.render('registro');
    },
    registerUsers: (req, res) => {
        let users;
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
        res.render('login');
    },
};

module.exports = controller;