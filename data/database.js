import mongoose from "mongoose";

export const connectDB=()=>{mongoose.connect("mongodb://localhost:27017",{
    dbName:"login",

}).then(()=> console.log("DATABASE CONNECTED"))
.catch(()=>console.log('e'))};
