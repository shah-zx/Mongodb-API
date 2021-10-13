const mongoose = require("mongoose"); // This is an object named mongoose //
mongoose.connect("mongodb://localhost:27017/DATA" , { useNewUrlParser: true , useUnifiedTopology: true }) // These are the methods we are using on that object //
.then (() => console.log("connection established!!"))
.catch((err) => console.log(err));
const validator = require("validator");
                  // Address of data base //


// Document formation //

const playlistSchema = new mongoose.Schema({             // srucuture is defined with the help of schema. //
    name : {
        type : String,
        required : true
    } , 
    ctype : String,
    videos : {
        type : Number,
        validate(value) {
        if(value < 0) {
            throw new Error ("videos must be greater than 0")
        }
        }
    },

    author : String ,
    email : { 
        type :String ,
        required : true ,
        unique : true ,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ("Email not valid")
            }
        }
    } , 
    active: Boolean , 
    date : {
        type : Date, 
        default : Date.now 
    }

})

//------------------------ IMP ------------------------------ //

// Creation of collections //

// Here we will see the custom validation //

// videos : {
//     type : Number,
//     validate(value) {
//     if(value < 0) {
//         throw new Error ("videos must be greater than 0")
//     }
//     }
// },

// the above piece of code tells that , the videos field must have a value greater than 0 //

//-------------------- END ---------------------------------- //



const playlist = new mongoose.model('Playlist' , playlistSchema)

//  First create a collection //

const createDocument = async () => {
    try {
    const newPl = new playlist({
        name : "new" , 
        ctype : "UI/UX",
        videos : 20 ,
        author : "Anthony" , 
        email : "shahanawaz@gmail.com" , 
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

// NPM validator package also helps us to validate the fields //

// REST API :

// Representational state transfer application programming interface //

// It is a software that allows two applications to communicate with each other over internet and through the various devices, every time you access 
// an app like Facebook or check the weather on your smart device , an API is used. 

// A restful API is an architecture style for an application program interface( API ) that uses HTTP requests to access a
// and use data. REST is not a programming language //

// Operations to be performed on the API : http://xyz.com/api/createUser : for creating the user //
// For readig the users : http://xyz.com/api/readUsers 
// For updating the users : http://xyz.com/api/updateUser
// For deleting the users : http://xyz.com/api/deleteUser

// create - POST
// Read - GET
// Update - PUT or PATCH
// Delete - DELETE




      