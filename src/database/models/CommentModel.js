module.exports = (sequelize, dataTypes) => {
    const alias = 'CommentModel';
    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: dataTypes.TEXT,
        product_id: dataTypes.INTEGER,
        userId: dataTypes.INTEGER,
        fileImg: dataTypes.TEXT,
        fname: dataTypes.STRING,
        star: dataTypes.INTEGER,
    };

    const config = {
        tableName: "comments",
        timestamps: false
    };

    const CommentModel = sequelize.define(alias, cols, config);

    // CommentModel.associate = function(models){
    //     CommentModel.hasMany(models.ProductModel,{
    //         as:'product',
    //         foreignKey:'id'
    //     })
    // }

    return CommentModel;
}