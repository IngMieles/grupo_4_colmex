module.exports = (sequelize, dataTypes) => {
    const alias = 'StarProdModel';
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
        fileImgP: dataTypes.TEXT,
        description: dataTypes.STRING,
        userId: dataTypes.INTEGER,
        product_id: dataTypes.INTEGER,
        star: dataTypes.INTEGER,
    };

    const config = {
        tableName: "famous",
        timestamps: false
    };

    const StarProdModel = sequelize.define(alias, cols, config);
    return StarProdModel;
}