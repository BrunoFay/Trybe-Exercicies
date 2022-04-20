import dotenv from 'dotenv';
import express from "express";
import { handleGenericError } from "./middlewares/handleGenericError";
import userRouter from './routes/userRoute';
import postsRouter from './routes/postsRoute';
import productsRouter from './routes/productRoute'
import restaurantsRouter from './routes/restaurantRoute'

dotenv.config();
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8080
app.use('/users',userRouter)
app.use('/posts',postsRouter)
app.use('/products',productsRouter)
app.use('/restaurants',restaurantsRouter)
app.use(handleGenericError)
app.listen(PORT, () => console.log(`server online in localhost:${PORT}`))