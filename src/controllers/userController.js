let bcrypt = require('bcryptjs');

const {validationResult} = require('express-validator');
const db = require('../database/models');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    logOut: (req, res) => {
        req.session.userID = undefined;
        req.userID = req.session.userID;
        let userID = req.userID;
        res.render('login',{userID});
    },
    usuarioLogin: async (req, res) => {
        let userID = req.userID;
        let errors = validationResult(req);

        if(errors.isEmpty()){
            try {
                const userLogin = await db.UserModel.findOne({
                    where:{email:{[db.Sequelize.Op.like]:'%'+req.body.email+'%'}}
                })
                if(userLogin!=null){
                    if(bcrypt.compareSync(req.body.password, userLogin.password)){
                        req.session.userID = userLogin;
                        userID = req.session.userID;
                    }
                }else{userID = undefined;}
                if(userID == undefined){
                    res.render('login',{userID,errorLog:[{msg:"Los datos son incorrectos. Verificalos y vuelve a intentar"}]});
                }else{
                    if(req.body.recuerdame != undefined){
                        res.cookie('recuerdame',userID.id);
                    }
                    else{
                        res.cookie('recuerdame',userID.id,{ maxAge: (1000 * 60) * 1 });
                    }
                    res.redirect('/');
                }
            } catch (error) {
                res.send(error);
            }
        }else{
            res.render('login',{userID,errors:errors.array(),old: req.body});
        }
    },
    registro: (req, res) => {
        res.render('registro');
    },
    registerUsers: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            if (req.file) {
                db.UserModel.create({
                    telefono: parseInt(req.body.telefono),
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password,10),
                    fileImg: req.file.filename
                });
            } else {
                db.UserModel.create({
                    telefono: parseInt(req.body.telefono),
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password,10),
                    fileImg: 'default-user.jpg',
                });
            }
            res.render('login');
        }else{
            res.render('registro',{errors:errors.array(),old: req.body});
        }
        
    },
    userPerfil: (req, res) => {
        let userID = req.userID;
        res.render('userPerfil',{userID});
    },
};

module.exports = controller;