import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import connectDB from '../db.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import products from './products.js';
import users from './users.js';

dotenv.config();
connectDB();

const productData = products.map(product => {
    delete product._id;
    return product;
})
const userData = users.map(user => {
    delete user._id;
    // hash user password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);

    return user;
})

const deleteData  = async () => {
    try{
        await Product.deleteMany();
        await User.deleteMany();
        console.log('successfully deleted');
        process.exit()
    }catch(err){
        console.error(`failed to delete data ${err.message}`);
        process.exit(1);
    }
}

const createData  = async () => {
    
    try{
        await Product.deleteMany();
        await User.deleteMany();

        await User.insertMany(userData);
        await Product.insertMany(productData);
        console.log('successfully created');
        process.exit()
    }catch(err){
        console.error(`failed to create data ${err.message}`);
        process.exit(1);
    }
}


if(process.argv[2] === '--delete'){
    deleteData()
}else {
    createData();
}

