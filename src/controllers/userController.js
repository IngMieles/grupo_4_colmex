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
    userLogin: (req, res) => {
        let userID = req.userID;
        let errors = validationResult(req);
        if(errors.isEmpty()){

        }else{
            res.render('login',{userID,errors:errors.array()});
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
            res.render('registro',{userID,errors:errors.array()});
        }
        
    },
};

module.exports = controller;