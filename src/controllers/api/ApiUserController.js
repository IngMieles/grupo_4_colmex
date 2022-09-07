const db = require('../../database/models');

const controller = {
    users: async (req, res) => {
        try {
            const dbUsers = await db.UserModel.findAll({attributes:{exclude: ["password"]}});
            let ApiUsers =[];
            dbUsers.forEach(element => {
                ApiUsers.push({
                    id:element.dataValues.id,
                    name:element.dataValues.fname,
                    email:element.dataValues.email,
                    detail: 'api/users/' + element.dataValues.id
                });
            });
            let ApiResult = {
                count: {
                    count : dbUsers.length,
                    status : 200
                },
                users: ApiUsers
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
    usersId: async (req, res) => {
        try {
            const usersIds = await db.UserModel.findByPk(req.params.id)

            let ApiResult = {
                id:usersIds.id,
                name:usersIds.fname,
                lastName:usersIds.lname,
                phone:usersIds.telefono,
                birth_date:usersIds.birth_date,
                email:usersIds.email,
                url_img:'/img/users/' + usersIds.fileImg
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
    userPerfil: (req, res) => {
        let userID = req.userID;
        res.json(userID);
    },
    emailExist: async (req, res) => {
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
            res.json(error);
        }
    },
    notification: async (req,res) =>{
        try{
            let userID = req.userID;
            const userNotifications = await db.NotificationModel.findAll({
                where:{seller_id:userID.id}
            });
            res.json(userNotifications);
        }catch (error) {
            res.json(error);
        }
    },
};

module.exports = controller;