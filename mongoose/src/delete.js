const mongoose = require("mongoose"); // This is an object named mongoose //
mongoose.connect("mongodb://localhost:27017/DATA" , { useNewUrlParser: true , useUnifiedTopology: true }) // These are the methods we are using on that object //
.then (() => console.log("connection established!!"))
.catch((err) => console.log(err));

                  // Address of data base //


// Document formation //

const playlistSchema = new mongoose.Schema({             // srucuture is defined with the help of schema. //
    name : {
        type : String,
        required : true
    } , 
    ctype : String,
    videos : Number,
    author : String ,
    active: Boolean , 
    date : {
        type : Date, 
        default : Date.now
    }

})


// A mongoose model is a wrapper on the mongoose schema ///
// A mongoose schema defines the structure of the document ,
// default values , validators etc , where as mongoose is a model ///
// provised an interface to the database for creating , querying  , updating , deleting records etc .

// Creation of collections ///

const playlist = new mongoose.model('Playlist' , playlistSchema)

// Now we will be deleting the document



const deleteDocument = async (_id) => {
    try {
        const result = await playlist.findByIdAndDelete({_id});
        console.log(result);

    }catch(err)
    {
        console.log(err);
    }
}

deleteDocument("6162b36c61dbfd9e86fe328e")
