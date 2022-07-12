const {validationResult} = require('express-validator');
const db = require('../database/models');

const controller = {
    index: async (req, res) => {
        try {
            let userID = req.userID;
            const ofertas = await db.OfferModel.findAll()
            const destacados = await db.StarProdModel.findAll()
            res.render('index', {ofertas,destacados,userID});
        } catch (error) {
            res.send(error);
        }
    },
    carritoCompras: (req, res) => {
        let userID = req.userID;
        res.render('carritoCompras',{userID});
    },
    categorias: async (req, res) => {
        try {
            const categorias = await db.ProductModel.findAll({
                order:[['categoria','ASC']]
            })
            let newProducts =[];
            let i=0;
            categorias.forEach(element => {
                if(i==0){
                    newProducts.push(element.dataValues)
                    i++;
                }else if(element.dataValues.categoria != newProducts[i-1].categoria && i != 0){
                        newProducts.push(element.dataValues)
                        i++;
                }
            });
            let userID = req.userID;
            res.render('categorias', {newProducts,userID});
        } catch (error) {
            res.send(error);
        }
    },
    category: async (req, res) => {
        try {
            const newProducts = await db.ProductModel.findAll({
                where:{categoria:{[db.Sequelize.Op.like]:'%'+req.params.categoria+'%'}},
                order:[['name','ASC']],
                limit: 100
            })
            let userID = req.userID;
            res.render('category', {newProducts,userID});
        } catch (error) {
            res.send(error);
        }
    },
    crearLista: (req, res) => {
        let userID = req.userID;
        res.render('crearLista',{userID});
    },
    crear: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            if (req.file) {
                db.ProductModel.create({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    fileImg: req.file.filename
                })
                .then(res.redirect('/category/'+req.body.categoria));
            } else if (req.body.img) {
                db.ProductModel.create({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    img: req.body.img
                })
                .then(res.redirect('/category/'+req.body.categoria));
            } else {
                db.ProductModel.create({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    fileImg: 'default-image.png'
                })
                .then(res.redirect('/category/'+req.body.categoria));
            }
        }else{
            let userID = req.userID;
            res.render('crearLista',{userID,errors:errors.array(),old: req.body});
        }
    },
    edita: async (req, res) => {
        let userID = req.userID;
        try {
            const productoImg = await db.ProductModel.findByPk(req.params.id)
            res.render('edita',{productoImg,userID});
        } catch (error) {
            res.send(error);
        }
    },
    editar: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let productoImg = await db.ProductModel.findByPk(req.params.id)
            if (req.file) {
                db.ProductModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    fileImg: req.file.filename
                },{where:{id:req.params.id}}).then(res.redirect('editado'));
            } else if (req.body.img) {
                db.ProductModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    img: req.body.img
                },{where:{id:req.params.id}}).then(res.redirect('editado'));
            } else if (productoImg.fileImg) {
                db.ProductModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    fileImg: productoImg.fileImg
                },{where:{id:req.params.id}}).then(res.redirect('editado'));
            } else if (productoImg.img) {
                db.ProductModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    img: productoImg.img
                },{where:{id:req.params.id}}).then(res.redirect('editado'));
            } else {
                db.ProductModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    precio: parseInt(req.body.precio),
                    fileImg: 'default-image.png'
                },{where:{id:req.params.id}}).then(res.redirect('editado'));
            }
        }else{
            try {
                const productoImg = await db.ProductModel.findByPk(req.params.id)
                let userID = req.userID;
                res.render('edita',{productoImg,userID,errors:errors.array(),old: req.body});
            } catch (error) {
                res.send(error);
            }
        }
    },
    delete: async (req, res) => {
        try {
            const productDelete = await db.ProductModel.findByPk(req.params.id)
            db.ProductModel.destroy({
                where:{id:req.params.id}
            })
            res.redirect('/category/'+productDelete.categoria);
        } catch (error) {
            res.send(error);
        }
    },
    detalleProducto: async (req, res) => {
        try {
            const productoImg = await db.ProductModel.findByPk(req.params.id,{
                include: [{association:'commentProduct'}],
                raw:true,
                nest:true
            })
            db.CommentModel.findAll({
                where:{product_id:req.params.id}
            })
            .then((comments)=>{
                let userID = req.userID;
                res.render('detalleProducto', {productoImg,userID,comments});
            });
                
            // const productoImg = await db.ProductModel.findByPk(req.params.id)
            // let userID = req.userID;
            // res.render('detalleProducto', {productoImg,userID,comentProduct});
        } catch (error) {
            res.send(error);
        }
    },
    comment: (req, res) => {
        db.CommentModel.create({
            ...req.body,
            userId: parseInt(req.body.userId),
            product_id: parseInt(req.body.product_id)
        })
        .then(res.redirect('/detalleProducto/'+req.params.id));
    },
};

module.exports = controller;