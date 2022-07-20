module.exports = (sequelize, dataTypes) => {
    const alias = 'ShoppingCarModel';
    const cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: dataTypes.INTEGER,
        userId: dataTypes.INTEGER,
        quantity: dataTypes.INTEGER,
        seller_id: dataTypes.INTEGER,
    };

    const config = {
        tableName: "shoppingCarts",
        timestamps: false
    };

    const ShoppingCarModel = sequelize.define(alias, cols, config);

    return ShoppingCarModel;
}