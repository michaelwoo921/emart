import mongoose from 'mongoose';

let mongoURI;

if(process.env.NODE_ENV==='development'){
    mongoURI = 'mongodb://127.0.0.1:27017/emart-prod'
} else{
    mongoURI = process.env.mongoURI
}

const connectDB =async () => {
    try{
        const conn = await mongoose.connect();
        console.log(`connected to DB ${conn.connection.host}`)

    }catch(error){
        console.log(`failed to connect: ${err.message}`);
        process.exit(1);
    }
    
}

export default connectDB;