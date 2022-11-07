import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';



// @desc get all products
// @method GET /api/products
// @access public
export const getProducts =asyncHandler(async (req,res) => {
    const products = await Product.find();
    res.json(products);
})


// @desc get a single product by ID
// @method GET /api/products/:id
// @access public
export const getProductById = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(400).json({message: `No product found with ID: ${req.params.id}`})
    } 
})