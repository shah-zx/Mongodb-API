
// Here we are connecting with the mongo db //
// Using express.js //

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api" , {
    // useCreateIndex:true , 
    useNewUrlParser:true , 
    useUnifiedTopology:true 
}).then(() => {
    console.log("Connected!!");
}).catch((e) => {
    console.log("Error");       
})
