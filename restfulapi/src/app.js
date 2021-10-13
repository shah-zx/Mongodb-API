const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;

// create a new student using the post method //
app.use(express.json());

// app.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e); }

})

// read the students using the get method //

app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find(); 
        console.log(studentsData);
        return res.send(studentsData);
    } catch (e) {
        return res.send(e);
    }

})

app.listen(port, () => {
    console.log(`connection is setup at port number ${port}`);
})

// to get the data of an individual student //

app.get("/students/:name", async (req, res) => {
    try {
        const _name = req.params.name;

        const studentData = await Student.findByname(_name);
        console.log(studentData)
        if (!studentData) {
            return res.status(404).send()
        } else {
            res.status(201).send(studentData);
        }
    } catch (e) {
        res.send(e)
    }
})


        // This is the another method //
        //  console.log(req.params.id);
        //  res.send(req.params.id);


// Now we will be deleting the students //

app.delete("/students/:id" , async (req , res) => {
       try{
            const deleteStudent = await Student.findByIdAndDelete(req.params.id);
            if (!req.params.id) {
                return res.status(400).send();
            }
            res.send(deleteStudent);
       }catch(e){
             return res.status(500).send(e);
            //  console.log(e)
       }

})





// some imp points //

// You do not need express.Json() and express.urlencoded()
// For GET requests oe delete requests we only need it for POST requests
// and PUT requests //

// express.json() is a method inbuilt in express to recongnise the incoming 
// Requests Object as a a JSON Object. This method is caled as a middleware in your application
//using the code : app.use(express.Json()) method

