import express from 'express';
import {getUsers, getUserById, authUser, registerUser} from '../controllers/userCtrl.js'


const router = express.Router();


router.route('/')
.get(getUsers)
.post(registerUser);

router.get('/:id', getUserById);

router.route('/login').post(authUser);


export default router;