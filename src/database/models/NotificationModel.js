module.exports = (sequelize, dataTypes) => {
    const alias = 'NotificationModel';
    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: dataTypes.INTEGER,
        product_id: dataTypes.INTEGER,
        seller_id: dataTypes.INTEGER,
        quantity: dataTypes.INTEGER
    };

    const config = {
        tableName: "notifications",
        timestamps: false
    };

    const NotificationModel = sequelize.define(alias, cols, config);

    NotificationModel.associate = function(models) {
        NotificationModel.belongsTo(models.UserModel, {
          as:  'user',
          foreignKey: 'userId'
        });

        NotificationModel.belongsTo(models.ProductModel, {
          as:  'product',
          foreignKey: 'product_id'
        });
    }
    return NotificationModel;
}