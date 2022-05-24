const imagenes =[
    {
        id: 1,
        img: '../img/Consola.jpg',
    },
    {
        id: 2,
        img: '../img/fpgaBoard.jpg',
    },
    {
        id: 3,
        img: '../img/image_book.jpg',
    },
    {
        id: 4,
        img: '../img/img-macbook-pro-2019.jpg',
    },
    {
        id: 5,
        img: '../img/img-samsung-galaxy-s10.jpg',
    },
    {
        id: 6,
        img: '../img/img-tv-samsung-smart.jpg',
    },
];

const controller = {
    index: (req,res)=>{
        let idProduct = req.params.id;
        const productoImg = imagenes.find(element =>element.id == idProduct);

        res.render('index',{'productoImg':productoImg});
    },
    carritoCompras: (req,res)=>{
        res.render('carritoCompras');
    },
    categorias: (req,res)=>{
        res.render('categorias');
    },
    crearLista: (req,res)=>{
        res.render('crearLista');
    },
    detalleProducto: (req,res)=>{
        let idProduct = req.params.id;
        const productoImg = imagenes.find(element =>element.id == idProduct);
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