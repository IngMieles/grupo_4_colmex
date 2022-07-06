module.exports = (sequelize, dataTypes) => {
    const alias = 'OfferModel';
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
        tableName: "offers",
        timestamps: false
    };

    const OfferModel = sequelize.define(alias, cols, config);
    return OfferModel;
}