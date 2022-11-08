import express from 'express';
import {getUsers, getUserById, authUser, registerUser, getUserProfile, updateUserProfile} from '../controllers/userCtrl.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();


router.route('/')
.get(getUsers)
.post(registerUser);

router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)


router.get('/:id', getUserById);



router.route('/login').post(authUser);


export default router;