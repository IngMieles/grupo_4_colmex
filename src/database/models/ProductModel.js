module.exports = (sequelize, dataTypes) => {
    const alias = 'ProductModel';
    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
        precio: dataTypes.FLOAT,
        categoria: dataTypes.STRING,
        img: dataTypes.TEXT,
        fileImg: dataTypes.TEXT,
        description: dataTypes.STRING,
        userId: dataTypes.INTEGER
    };

    const config = {
        tableName: "products",
        timestamps: false
    };

    const ProductModel = sequelize.define(alias, cols, config);

    // ProductModel.associate = function(models){
    //     ProductModel.hasMany(models.CommentModel,{
    //         as:'comment',
    //         foreignKey:'id'
    //     })
    // }

    ProductModel.associate = function(models){
        ProductModel.belongsToMany(models.UserModel,{
            as:'commentProduct',
            through: "comments",
            foreignKey:'product_id',
            otherKey: "userId",
            timestamps: false
        })

        ProductModel.belongsToMany(models.UserModel,{
            as:'userCart',
            through: "shoppingCarts",
            foreignKey:'product_id',
            otherKey: "userId",
            timestamps: false
        })
    }
    return ProductModel;
}