import asyncHandler from 'express-async-handler';
import products from '../data/products.js';


// @desc get all products
// @method GET /api/products
// @access public
export const getProducts =asyncHandler((req,res) => {
    res.json(products);
})


// @desc get a single product by ID
// @method GET /api/products/:id
// @access public
export const getProductById = asyncHandler((req,res) => {
    const product = products.find(product => product._id === req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(400).json({message: `No product found with ID: ${req.params.id}`})
    } 
})