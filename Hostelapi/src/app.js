const express = require("express");
require("./db/connection");                   // Connecting with the database //
const Hostel = require("./models/hostel");
const app = express();
app.get("/", (req, res) => {
    res.send("hello there , created successfully")

})
const port = process.env.PORT || 3000;

app.use(express.json());

// Creating the hostels //

app.post("/hostels", async (req, res) => {
    console.log(req.body);
    try {
        const user = await new Hostel(req.body).save();  // req.body is for requesting the body in the postman //
        res.status(201).json(user);      // This is a promise being returned for the data to get stored in the database//

    } catch (e) {
        res.status(400).json(e)  // his will catch the error //
    }
    })


// Updating the hostels using post method //

app.get("/hostels" , async (req, res) => {
    try {
            const hostelsData = await Hostel.find();
            console.log(hostelsData);
            res.send(hostelsData);
    } catch(e) {
            res.send(e);
    }
})

// By doing thsi we can get the total nmber of hostels //





// All the operations will go here //

app.listen(port, () => {
    console.log(`connected at port numnber ${port}`)
})

