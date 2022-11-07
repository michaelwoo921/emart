import asyncHandler from 'express-async-handler';
import users from '../data/users.js';


// @desc get all users
// @method GET /api/users
// @access private
export const getUsers = asyncHandler((req,res) => {
    res.json(users);
})


// @desc get a single User by ID
// @method GET /api/users/:id
// @access public
export const getUserById = asyncHandler((req,res) => {
    const user = users.find(user => user._id === req.params.id);
    if(user){
        res.json(user);
    } else {
        res.status(400).json({message: `No user found with ID: ${req.params.id}`})
    } 
})