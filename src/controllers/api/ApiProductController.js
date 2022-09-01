const db = require('../../database/models');

const controller = {
    products: async (req, res) => {
        try {
            const dbProducts = await db.ProductModel.findAll();

            const productsData = dbProducts.map(productData => (
                {
                   ...productData.dataValues,
                   detail: '/api/products/' + productData.id
               }
            ));
            let ApiResult = {
                count: {
                    count : dbProducts.length,
                    status : 200
                },
                products: productsData
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
    productId: async (req, res) => {
        try {
            const productsId = await db.ProductModel.findByPk(req.params.id)

            let ApiResult = {}
            if(productsId.img == null){
                ApiResult = {
                    id:productsId.id,
                    name:productsId.name,
                    description:productsId.description,
                    url_img:'/img/products/' + productsId.fileImg,
                }
            }else{
                ApiResult = {
                    id:productsId.id,
                    name:productsId.name,
                    description:productsId.description,
                    url_img: productsId.img,
                }
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
};

module.exports = controller;