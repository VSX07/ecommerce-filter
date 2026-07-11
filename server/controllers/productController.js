const products = require("../data/products");
const filterProducts = require("../utils/filterProducts");

const getAllProducts = (req, res) => {

    const filteredProducts = filterProducts(
        products,
        req.query
    );

    res.json(filteredProducts);

};

module.exports = {
    getAllProducts,
};