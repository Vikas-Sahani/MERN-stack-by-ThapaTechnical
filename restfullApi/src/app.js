// how do we know that we can do CRUD in any url for example in img url we cann't do but github url we can do
const express = require("express");
require("./db/connection"); // importing connection.js file
const Student = require("./models/students"); // importing students.js file = table
const studentRouter = require("./routers/studentRouter"); //importing student router

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); //it's used here to get the data of <body> = 00.46.00
app.use(studentRouter); // this is the same as above 3rd step in app.js file

//now we'll cur our CRUD from this file & paste in studentRoute.js file

app.listen(port, () => {
  console.log(`connection is setup at ${port} from express(app.js)`);
});
