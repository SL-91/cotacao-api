import { config } from 'dotenv';
config();
import express from 'express';
import apiRouter from './routes/api.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

