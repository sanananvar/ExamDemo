import {connect } from "mongoose"

connect("mongodb+srv://sananaaaf206:senan2113@senan.27znz.mongodb.net/")
.then(()=>{
    console.log("connected")
})