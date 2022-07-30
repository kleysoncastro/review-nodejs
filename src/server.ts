import express from 'express'

import { categoiresRouter } from './routes/categories.routes';


const app = express();

app.use(express.json());

app.use(categoiresRouter);

app.listen(3333, () => console.log("app it is running"));
