import jwt from 'jsonwebtoken';
console.log(process.env.jwtSecret);
const generateToken = (userId)=> {
    return jwt.sign({_id: userId}, process.env.jwtSecret, {expiresIn: '30d'});
}

export default generateToken;