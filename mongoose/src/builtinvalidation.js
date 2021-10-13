const mongoose = require("mongoose"); // This is an object named mongoose //
mongoose.connect("mongodb://localhost:27017/DATA" , { useNewUrlParser: true , useUnifiedTopology: true }) // These are the methods we are using on that object //
.then (() => console.log("connection established!!"))
.catch((err) => console.log(err));

                  // Address of data base //


// Document formation //

const playlistSchema = new mongoose.Schema({             // srucuture is defined with the help of schema. //
    name : {
        type : String,
        required : true , 
        unique : true, 
        lowercase : true , 
        trim:true , 
        minlength: [2 , "minimum two letters "] ,
        maxlength : 20
    } , 
    ctype : {
        type : String,
        enum : ["frontend" , "backend" , "database"] , 
        lowercase : true,
        required : true
    }, 

    videos : Number,
    author : String ,
    active: Boolean , 
    date : {
        type : Date, 
        default : Date.now
    }

})

//---------------------- IMP ----------------------------- //

// Here we are learning various validations one can give while making collections //

// name : {
//     type : String,
//     required : true , 
//     unique : true, 
//     uppercase : true
// } , 

// The above code will make sure that the name is in the uppercase //

// trim:true : this will trim the name if any spaces are givn in it //

// minlength: 2 ,
// maxlength : 20  these two will help in giving the length to the name //

//  minlength: [2 , "minimum two letters "] , by this we can give our own error ( the message) //

// ctype : {
//     type : String,
//     enum : ["frontend" , "backend" , "database"] , 
//     lowercase : true,
//     required : true
// }, 

// The above piece of code will give us the fields that must be in the ctype //

// ------------------------ END ---------------------------- //

// Creation of collections ///

const playlist = new mongoose.model('Playlist' , playlistSchema)

//  First create a collection //

const createDocument = async () => {
    try {
    const newPl = new playlist({
        name : "new" , 
        ctype : "UI/UX",
        videos : 55 ,
        author : "Anthony" , 
        active : true , 
     
    })
    const result = await newPl.save();
    console.log(result);
    }
    catch(error){
        console.log(error)
    }

}
createDocument();


