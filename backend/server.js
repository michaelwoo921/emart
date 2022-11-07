import path from 'path';
import dotenv from 'dotenv';

import express from 'express';
import connectDB from './db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';


dotenv.config();


const app = express();
// connectDB();

//routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);



app.use("/api/error", (req,res,next) => {
    const error =  new Error('error')
    next(error);
    // or throw new Error('error);
})

const __dirname = path.resolve();

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));
}




app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port 5000`));