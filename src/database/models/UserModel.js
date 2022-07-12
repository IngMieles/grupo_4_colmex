module.exports = (sequelize, dataTypes) => {
    const alias = 'UserModel';
    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telefono: dataTypes.INTEGER,
        birth_date: dataTypes.STRING,
        addres: dataTypes.STRING,
        profile: dataTypes.STRING,
        fname: dataTypes.STRING,
        lname: dataTypes.STRING,
        email: dataTypes.STRING,
        country: dataTypes.STRING,
        password: dataTypes.TEXT,
        subject: dataTypes.STRING,
        fileImg: dataTypes.TEXT
    };

    const config = {
        tableName: "users",
        timestamps: false
    };

    const UserModel = sequelize.define(alias, cols, config);

    UserModel.associate = function(models){
        // UserModel.belongsTo(models.CommentModel,{
        //     as:'userComent',
        //     foreignKey:'id'
        // })
        UserModel.belongsToMany(models.ProductModel,{
            as:'commentProduct',
            through: "comments",
            foreignKey:'userId',
            otherKey: "product_id",
            timestamps: false
        })
    }

    return UserModel;
}