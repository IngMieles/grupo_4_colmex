const productos =[
    {
        id: 1,
        name: 'Consola',
        precio: 100.0,
        description: 'descripción no disponible',
        categoria: 'Video Juegos',
        img: '../img/Consola.jpg',
    },
    {
        id: 2,
        name: 'fpgaBoard',
        precio: 200.0,
        description: 'descripción no disponible',
        categoria: 'Electrónica',
        img: '../img/fpgaBoard.jpg',
    },
    {
        id: 3,
        name: 'Libro',
        precio: 300.0,
        description: 'descripción no disponible',
        categoria: 'Lectura',
        img: '../img/image_book.jpg',
    },
    {
        id: 4,
        name: 'macbook',
        precio: 400.0,
        description: 'descripción no disponible',
        categoria: 'Computadoras',
        img: '../img/img-macbook-pro-2019.jpg',
    },
    {
        id: 5,
        name: 'samsung-galaxy-s10',
        precio: 500.0,
        description: 'descripción no disponible',
        categoria: 'Celulares',
        img: '../img/img-samsung-galaxy-s10.jpg',
    },
    {
        id: 6,
        name: 'tv-samsung-smart',
        precio: 600.0,
        description: 'descripción no disponible',
        categoria: 'Entretenimiento',
        img: '../img/img-tv-samsung-smart.jpg',
    },
];
const ofertas =[
    {
        id: 2,
        name: 'fpgaBoard',
        precio: 200.0,
        description: 'descripción no disponible',
        img: '../img/fpgaBoard.jpg',
    },
    {
        id: 3,
        name: 'Libro',
        precio: 300.0,
        description: 'descripción no disponible',
        img: '../img/image_book.jpg',
    },
];
const destacados =[
    {
        id: 1,
        name: 'Consola',
        precio: 100.0,
        description: 'descripción no disponible',
        img: '../img/Consola.jpg',
    },
    {
        id: 5,
        name: 'samsung-galaxy-s10',
        precio: 500.0,
        description: 'descripción no disponible',
        img: '../img/img-samsung-galaxy-s10.jpg',
    },
];

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