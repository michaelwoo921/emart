import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    isAdmin: {type:Boolean, default: false}

}, {timestamps: true});

userSchema.methods.matchPassword = async function(enteredPassword){
    
    const isMatch = await bcrypt.compare(enteredPassword, this.password);
    console.log(isMatch)
    return isMatch;
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
        console.log('not modified');
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    console.log('before saving');
})


const userModel = mongoose.model('User', userSchema);

export default userModel;