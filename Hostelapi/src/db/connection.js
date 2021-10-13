// Connecting with mongodb using the mongoose //

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hostels-api" , {
    useNewUrlParser:true , 
    useUnifiedTopology:true 
}).then(() => {
    console.log("Database connected");
}).catch((e)=> {
    console.log("Error");
})

