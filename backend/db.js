import mongoose from 'mongoose';



const connectDB =async () => {
    let mongoURI;
    console.log(process.env.mongoURI);
    if(process.env.NODE_ENV==='development'){
        mongoURI = 'mongodb://127.0.0.1:27017/emart';
    } else{
    mongoURI = process.env.mongoURI 
    }

    try{
        const conn = await mongoose.connect(mongoURI);
        console.log(`connected to DB ${conn.connection.host}`)

    }catch(error){
        console.log(`failed to connect: ${error.message}`);
        process.exit(1);
    }
    
}

export default connectDB;