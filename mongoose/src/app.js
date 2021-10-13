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

// create document or insert 

// const reactPlaylist = new playlist({
//     name : "React js", 
//     ctype : "Front end",
//     videos : 10,
//     author : "Shahnawaz" ,
//     active: true , 
// })

// reactPlaylist.save()

// // const javaPlaylist = new mongoose.model('Playlist' , playlistSchema)

// const javaPl = new playlist({
//     name : "Java", 
//     ctype : "Front-end",
//     videos : 18,
//     author : "Hamza" ,
//     active: true , 
// })

// javaPl.save()  // Save is one of the methods we can use to create the collections //

// This is the modern way to create the collections : async and await  //


// const createDocument = async () => {

//     try{

//     const pythonPl = new playlist({
//         name : "Node js" , 
//         ctype : "Back-end",
//         videos : 50 ,
//         author : "Ridhima" , 
//         active : true , 
//     })
    
//  const result = await pythonPl.save()
//  console.log(result);

// } catch (error) {
//     console.log(error);
// }

// }

// createDocument();

// try and catch are used to catch errors //

// const createDocument  = async () => {

//     try {
//    const webPl = new playlist({
//        name : 'playlist' , 
//        ctype : 'application' , 
//        videos : 12 , 
//        author : 'John' , 
//        active : true , 
//    })
//    const jsPl = new playlist({
//     name : 'javascript' , 
//     ctype : 'application' , 
//     videos : 22 , 
//     author : 'Marry' , 
//     active : true , 
//    })
//    const mongoosePl = new playlist({
//     name : 'mongoose' , 
//     ctype : 'application' , 
//     videos : 32 , 
//     author : 'Tim' , 
//     active : true , 
//    })
//    const nextjsPl = new playlist({
//     name : 'playlist' , 
//     ctype : 'nextJs' , 
//     videos : 12 , 
//     author : 'John' , 
//     active : true , 
//     })

//    const result = await playlist.insertMany([jsPl , mongoosePl , nextjsPl]);
//    console.log(result);

// } 
// catch(error) {
//     console.log(error);
// }


// }

// createDocument();

// What is schema //

// A mongoose schema defines the structure of the document default values , validators etc


// const playlistSchema = new mongoose.Schema({             // srucuture is defined with the help of schema. //
//     name : {
//         type : String,
//         required : true
//     } , 
//     ctype : String,
//     videos : Number,
//     author : String ,
//     active: Boolean , 
//     date : {
//         type : Date, 
//         default : Date.now
//     }

// })

// Model //

// Simply collections craetion //
// const playlist = new mongoose.model('Playlist' , playlistSchema)


// All these we have done singly and not ek saath pure so , now we will see how to handle ek saath bahut sare 
// collections //



// const createDocument  = async () => {

//     try {
//    const webPl = new playlist({
//        name : 'playlist' , 
//        ctype : 'application' , 
//        videos : 12 , 
//        author : 'John' , 
//        active : true , 
//    })
//    const jsPl = new playlist({
//     name : 'javascript' , 
//     ctype : 'application' , 
//     videos : 22 , 
//     author : 'Marry' , 
//     active : true , 
//    })
//    const mongoosePl = new playlist({
//     name : 'mongoose' , 
//     ctype : 'application' , 
//     videos : 32 , 
//     author : 'Tim' , 
//     active : true , 
//    })
//    const nextjsPl = new playlist({
//     name : 'playlist' , 
//     ctype : 'nextJs' , 
//     videos : 12 , 
//     author : 'John' , 
//     active : true , 
//     })

//    const result = await playlist.insertMany([jsPl , mongoosePl , nextjsPl]);
//    console.log(result);

// } 
// catch(error) {
//     console.log(error);
// }
// }

// createDocument();

// The above code helps us to insert many collections at a time //

// How to read the documents using mngoose //

// const getDocument = async () => {
//     const result = await playlist.find({ctype: "application"}).select({name: 1}); 
//     console.log(result);
// }

// getDocument();
 
// This will give all the documents 
// const result = await playlist.find({ctype: "application"});  this will only give the documents which are having the
// ctype as application //
// const result = await playlist.find({ctype: "application"}).select({name: 1}); this will give us the names of the documents which contain ctype as frontend //


// const createDocument = async () => {
//     try {
//         const cppPl = new playlist({
//             name : 'C plus plus playlist' , 
//             ctype : 'Software engineering' , 
//             videos : 120 , 
//             author : 'Harry' , 
//             active : true , 
//         })
//         const cPl = new playlist({
//             name : 'C playlist' , 
//             ctype : 'Software engineering' , 
//             videos : 70 , 
//             author : 'Harry' , 
//             active : true , 
//         })
//         const phpPl = new playlist({
//             name : 'php playlist' , 
//             ctype : 'Software engineering' , 
//             videos : 90 , 
//             author : 'Harry' , 
//             active : true , 
//         })
//         const csPl = new playlist({
//             name : 'C sharp playlist' , 
//             ctype : 'Software engineering' , 
//             videos : 65 , 
//             author : 'Harry' , 
//             active : true , 
//         })
//         const ajavaPl = new playlist({
//             name : 'Advanced java playlist' , 
//             ctype : 'Software engineering' , 
//             videos : 60 , 
//             author : 'Harry' , 
//             active : true , 
//         })


//         const result = await playlist.insertMany([cPl , phpPl , csPl  , ajavaPl]);
//         console.log(result);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// createDocument();



// Comparison  query operators  using Mongoose //

// Its an advanced query //


// const getDocument = async () => {
//     const result = await playlist
//     .find({ctype: {$nin : ["Back-end" , "database"]}})
//     .select({name: 1}); 
//     console.log(result);
// }

// getDocument();

// .find({videos: 50}) this will give the name of the document with videos = 50 
// .find({videos: {$gt :50}}) this will give us the videos greater than 50
// .find({videos: {$gte :50}}) this will give us the videos greater than or equal to 50
// .find({videos: {$lte :50}}) this will give us the videos less than equla to 50
// .find({ctype: {$in : ["Back-end" , "database"]}}) this will give the documents which come in the type bacj-end  , database 

// Logical operators //

// const getDocument = async () => {
//     const result = await playlist
//     .find({author : "Harry"})
//     .select({name: 1})
//     .sort();
//     // .countDocuments();
//     console.log(result);
// }

// getDocument();

// .find({$or : [{ctype : "Back-end"} , {author : "shahnawaz"}]}) : this code will give us the fields which contain either the ctype as back end or author as shahnawaz //
// .find({$and : [{ctype : "Back-end"} , {author : "shahnawaz"}]}) : this code will give us the fields which contain ctype as backend and author as shahnawaz
// .find({$not : [{ctype : "Back-end"} , {author : "shahnawaz"}]}) : this will give us the values apart from backend and author as shahnawaz


// Count query method //

// const getDocument = async () => {
//     const result = await playlist
//     .find({author : "Harry"})
//     .select({name: 1})
//     .sort({name: -1});
//     // .countDocuments();
//     console.log(result);
// }

// getDocument();


// .countDocuments(); this will give the count of the fields 
// .sort(); this will sort the fields 


// Updating the documents //

// We will be requiring the id of the collection for updating //


const updateDocument = async (_id) => {
   try{
    const result = await playlist.updateOne({_id}, 
    {$set : {
        name : "Advanced-java"
    }});
    console.log(result);
}catch(err){
    console.log(err);
}
}
updateDocument("6162b36c61dbfd9e86fe328f") // Here we have passed the unique id //




















