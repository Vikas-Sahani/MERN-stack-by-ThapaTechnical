const express = require("express");
require("./db/connection"); // importing connection.js file
const Student = require("./models/students"); // importing students.js file = table

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); //it's used here to get the data of <body> = 00.46.00

app.post("/student", (req, res) => {
  console.log(req.body); //44.30
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
  // res.send("hello from the other side (post Method)");
});

//read the data of registered Students
app.get("/student", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.send(studentData);
  } catch (e) {
    console.log(e); //show the error
  }
});

// get the indivisual Student data using id
app.get("/student/:id", async (req, res) => {
  //: for dynamic
  try {
    const _id = req.params.id;
    // console.log(req.body); // console.log karne per terminal per show ho raha h but
    // res.send(req.params.id); // postman me show karne ke liye hame iss line ko use karan padega
    const studentData = await Student.findById({ _id }); //same name of key & value, so we can use it as _id. this is know as object destructuring
    if (!studentData) {
      // if studentData is not valid then throw status code 404
      res.status(404).send();
    } else {
      //send data
      res.send(studentData);
      console.log(studentData);
    }
  } catch (e) {
    res.status(500).send(e); // statusCode:500 is for Internal Server Error which means data is not available in server
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port} from express(app.js)`);
});

//You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests. We only need it for post and pur req

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in you application
//using the code: app.use(express.json());
