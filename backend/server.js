import path from 'path';
import dotenv from 'dotenv';

import express from 'express';

dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port 5000`));