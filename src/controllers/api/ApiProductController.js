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
                    meta: {
                        status : 200
                    },
                    product:{
                        id:productsId.id,
                        name:productsId.name,
                        description:productsId.description,
                        url_img:'/img/products/' + productsId.fileImg,
                    }
                }
            }else{
                ApiResult = {
                    meta: {
                        status : 200
                    },
                    product:{
                        id:productsId.id,
                        name:productsId.name,
                        description:productsId.description,
                        url_img: productsId.img,
                    }
                }
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
    categories: async (req, res) => {
        try {
            const categorias = await db.ProductModel.findAll({
                order:[['categoria','ASC']]
            })
            let newCategory =[];
            let totalCategory =[];
            let i=0;
            categorias.forEach(element => {
                if(i==0){
                    newCategory.push(element.dataValues)
                    const result = categorias.filter(total=>total.dataValues.categoria == element.dataValues.categoria);

                    totalCategory.push({
                        category: element.dataValues.categoria,
                        total: result.length,
                    });
                    i++;
                }else if(element.dataValues.categoria != newCategory[i-1].categoria && i != 0){
                        newCategory.push(element.dataValues)
                        const result = categorias.filter(total=> total.dataValues.categoria == element.dataValues.categoria);
                        totalCategory.push({
                            category: element.dataValues.categoria,
                            total: result.length,
                        });
                        i++;
                }
            });

            let ApiResult = {
                count: {
                    count : newCategory.length,
                    status : 200
                },
                categories: totalCategory
            }
            res.json(ApiResult);
        } catch (error) {
            res.json(error);
        }
    },
};

module.exports = controller;