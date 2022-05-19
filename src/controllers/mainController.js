const controller = {
    index: (req,res)=>{
        res.render('index');
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
        res.render('detalleProducto');
    },
    login: (req,res)=>{
        res.render('login');
    },
    registro: (req,res)=>{
        res.render('registro');
    },
};

module.exports = controller;