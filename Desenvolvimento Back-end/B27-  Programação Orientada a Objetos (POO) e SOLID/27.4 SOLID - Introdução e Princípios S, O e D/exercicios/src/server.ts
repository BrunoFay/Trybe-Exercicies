import express from 'express';
import { json } from 'body-parser';
import planstRouter from './routes/plantsRoute';

const app = express();
const PORT = 8080;
app.use(json());
app.use('/plants', planstRouter);
app.listen(PORT, () => console.log(`server online on port ${PORT}`));