import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
// import users from '../data/users.js';


// @desc get all users
// @method GET /api/users
// @access private
export const getUsers = asyncHandler(async (req,res) => {
    const users = await User.find();
    res.json(users);
})


// @desc get a single User by ID
// @method GET /api/users/:id
// @access public
export const getUserById = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id)
    if(user){
        res.json(user);
    } else {
        res.status(400).json({message: `No user found with ID: ${req.params.id}`})
    } 
})


// @desc login
// @method POST /api/users/login
// @access public
export const authUser = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email});
    
    if(user && await user.matchPassword(password)){
      
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
})


// @desc gegister user
// @method POST /api/users
// @access public
export const registerUser = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(401);
        throw new Error('User already exists');
    }  
    const createdUser = await User.create({
        name, email, password
    });

    res.json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser._id)
    }) 
})


// @desc get user profile from token
// @method GE/api/users/profile
// @access private
export const getUserProfile = asyncHandler(async (req,res) => {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin
    }) 
})

// @desc update user profile from token
// @method PUT api/users/profile
// @access private
export const updateUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        if(req.body.name){
            user.name = req.body.name;
        }
    if(req.body.email){
        user.email = req.body.email;
    }
    if(req.body.password){
        user.password = req.body.password;
    }
    await user.save();
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password:  user.password,
        isAdmin: user.isAdmin
      }) 

    }else{
        res.status(404);
        throw new User('User not found')
    }





})