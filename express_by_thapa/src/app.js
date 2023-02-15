const path = require("path")
const express = require("express");
const app = express();


//relativ path (../../fullPath) & absolute path(../shortPath)
// console.log(__dirname); //this will give us current path => D:\hp vikas\BackendByThapa\express_by_thapa\src      
// console.log(path.join(__dirname, ".."));
const staticPath = path.join(__dirname, "../public")

//built in middleware
app.use(express.static(staticPath)); //for rendering the static page of public>index.html

// app.get(route,callback);
app.get("/",(req, res)=>{
    res.send("hello world, I am vikas leaning express")
});
app.get("/about",(req, res)=>{
    res.send("hello world, listening from about page")
});

//The callback function has 2 parameters, request(req) and response(res)
//The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body, 
// HTTP headers, etc.

// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTp request.

app.listen(8000,(req, res)=>{ // this middleware is for listening the request
    console.log("listing the port at 8000");
});