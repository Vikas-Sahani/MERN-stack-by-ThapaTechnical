const express = require("express");
require("./db/connection") // importing connection.js file
const Student = require("./models/students") // importing students.js file = table

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); //it's used here to get the data of <body> = 00.44.00

app.post("/student", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    // res.send("hello from the other side (post Method)");
})

app.listen(port, ()=> {
    console.log(`connection is setup at ${port} from express(app.js)`);
});

//You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests. We only need it for post and pur req

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in you application 
//using the code: app.use(express.json());

