const path = require('path');
let fs = require('fs');
let dataUsers = require('../data/usersData');
const usersFilePath = path.join(__dirname, '../data/usersData.json');

const {validationResult} = require('express-validator');

const controller = {
    login: (req, res) => {
        let userID = req.userID;
        res.render('login',{userID});
    },
    logOut: (req, res) => {
        req.session.userID = undefined;
        req.userID = req.session.userID;
        let userID = req.userID;
        res.render('login',{userID});
    },
    usuarioLogin: (req, res) => {
        let userID = req.userID;
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let usersLogin = fs.readFileSync(usersFilePath, 'utf-8');
            let userLogin = JSON.parse(usersLogin);

            req.session.userID = userLogin.find(element =>element.email == req.body.email && element.password ==  req.body.password);
            let userID = req.session.userID;
            if(userID == undefined){
                res.render('login',{userID,errorLog:[{msg:"Los datos son incorrectos. Verificalos y vuelve a intentar"}]});
            }else{
                if(req.body.recuerdame != undefined){
                    res.cookie('recuerdame',userID.id);
                }else{
                    res.cookie('recuerdame',userID.id,{ maxAge: 60000 });
                }
                res.redirect('/');
            }
        }else{
            res.render('login',{userID,errors:errors.array(),old: req.body});
        }
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
            res.render('registro',{userID,errors:errors.array(),old: req.body});
        }
        
    },
    userPerfil: (req, res) => {
        let userID = req.userID;
        res.render('userPerfil',{userID});
    },
};

module.exports = controller;