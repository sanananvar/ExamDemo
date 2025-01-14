import { Schema, model } from "mongoose"


let ProductSchema = new Schema({
    name:String,
    price:Number,
    isSale:Boolean,
    image:String,
    discount:Number,
})
    
export let ProductModel= model("Products",ProductSchema)