import path from 'path';
import express from 'express';

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'build')));


app.listen(5000, () => console.log(`server running on port 5000`));