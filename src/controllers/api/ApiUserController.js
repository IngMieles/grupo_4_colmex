let bcrypt = require('bcryptjs');

const {validationResult} = require('express-validator');
const db = require('../../database/models');

const controller = {
    userPerfil: (req, res) => {
        let userID = req.userID;
        res.json(userID);
    },
    emailExist: async (req, res) => {
        console.log('req.params.apiGet');
        let errors = [];
        try {
            const validaEmail = await db.UserModel.findOne({
                where:{email:{[db.Sequelize.Op.like]:req.params.apiGet}}
            })
            if(validaEmail){
                errors.push({
                    value: '',
                    msg: 'El correo ya existe ingresa otro!!',
                    param: 'email',
                    location: 'body'
                });
                res.json({errors});
            }
            else{
                errors.push({
                    value: req.params.apiGet,
                    msg: 'El correo no existe',
                    param: 'email',
                    location: 'body'
                });
                res.json({errors});
            }
        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = controller;