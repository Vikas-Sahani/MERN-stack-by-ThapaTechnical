const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//no need of these lines. instead of below 3 lines we have added above one lines
// ,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
mongoose.connect("mongodb://localhost:27017/students-api")
.then(()=>{
    console.log("connection is successful");
}).catch(e=>{
    console.log("No connection")
})