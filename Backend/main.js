import express from "express"
const app=express()
import cors from "cors"
import { config } from "dotenv"
app.use(express.json())
app.use(cors())
config()

import { route } from "./routers/ProductsRouter.js"
import "./config/config.js"
app.use("/products",route)
app.listen(3000,()=>{
    console.log("connected")
})