import { config } from 'dotenv';
config();
import express from 'express';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', require('./src/routes/routes'));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});