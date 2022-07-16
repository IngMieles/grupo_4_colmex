const {validationResult} = require('express-validator');
const db = require('../database/models');

const controller = {
    index: async (req, res) => {
        try {
            let userID = req.userID;
            const ofertas = await db.OfferModel.findAll()
            const destacados = await db.StarProdModel.findAll()
            const Allcoments = await db.CommentModel.findAll()
            res.render('index', {ofertas,destacados,userID,Allcoments});
        } catch (error) {
            res.send(error);
        }
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
            const Allcoments = await db.CommentModel.findAll()
            let userID = req.userID;
            res.render('category', {newProducts,userID,Allcoments});
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
            const Allcoments = await db.CommentModel.findAll()
            const Offert = await db.OfferModel.findOne({where:{product_id:req.params.id}})
            db.CommentModel.findAll({
                where:{product_id:req.params.id}
            })
            .then((comments)=>{
                let userID = req.userID;
                res.render('detalleProducto', {productoImg,userID,comments,Allcoments,Offert});
            });
        } catch (error) {
            res.send(error);
        }
    },
    comment: (req, res) => {
        db.CommentModel.create({
            ...req.body,
            userId: parseInt(req.body.userId),
            product_id: parseInt(req.body.product_id),
            fname: req.body.fname,
            star: parseInt(req.body.star)
        })
        .then(res.redirect('/detalleProducto/'+req.params.id));
    },
    carritoCompras: async (req, res) => {
        try{
            let userID = req.userID;
            const carritos = await db.UserModel.findAll({
                include: [{association:'userCart'}],
                raw:true,
                nest:true
            })
            const shoppingCart = await db.ShoppingCarModel.findAll({
                where:{userId:userID.id}
            })
            res.render('carritoCompras',{carritos,userID,shoppingCart});
        }catch (err) {
            res.send(err);
        }
    },
    addCart: (req, res) => {
        db.ShoppingCarModel.create({
            ...req.body,
            userId: parseInt(req.body.userId),
            product_id: parseInt(req.body.product_id),
            quantity: parseInt(req.body.quantity)
        })
        .then(res.redirect('/carritoCompras'));
    },
    addNewProductCart: (req, res) => {
        db.ShoppingCarModel.update({
            ...req.body,
            userId: parseInt(req.body.userId),
            product_id: parseInt(req.body.product_id),
            quantity: parseInt(req.body.quantity),
        },{where:{id:req.params.id}})
        .then(res.redirect('/carritoCompras'));
    },
    deleteCart: (req, res) => {
        db.ShoppingCarModel.destroy({
            where:{id:req.params.id}
        })
        .then(res.redirect('/carritoCompras'))
        .catch((error)=> {
            res.send(error);
        })
    },
    save: async (req, res) => {
        try {
            const Offert = await db.OfferModel.findOne({where:{product_id:req.params.id}})
            if(Offert){
                db.OfferModel.update({
                    ...req.body,
                    userId: parseInt(req.body.userId),
                    product_id: req.params.id,
                    precio: parseInt(req.body.precio),
                    save_product: parseInt(req.body.save_product),
                },{where:{product_id:req.params.id}})
                .then(res.redirect('/detalleProducto/'+req.params.id));
            }
            db.OfferModel.create({
                ...req.body,
                userId: parseInt(req.body.userId),
                product_id: req.params.id,
                precio: parseInt(req.body.precio),
                save_product: parseInt(req.body.save_product),
            })
            .then(res.redirect('/detalleProducto/'+req.params.id));
        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = controller;