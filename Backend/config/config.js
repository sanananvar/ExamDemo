import {connect } from "mongoose"

connect("mongodb+srv://elekberovsenan0:senan2112@clusterlocal.sk4vz.mongodb.net/")
.then(()=>{
    console.log("Dbconnected")
})