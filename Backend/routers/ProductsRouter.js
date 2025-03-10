import express from "express"
import { ProductController } from "../controllers/ProductController.js";
export const  route = express.Router()

route.get("/",ProductController.getAll)
route.get("/:id",ProductController.getById)
route.delete("/:id",ProductController.deleteproduct)
route.post("/",ProductController.postproduct)
route.put("/:id",ProductController.update)