// 1. connecting mongoDB and Node
// error of changing name while installing mongoose

const mongoose = require("mongoose");             

//connection creation and creating a new db 
mongoose.set('strictQuery', true);  //use this instead of below's 2 parameter and for preventing from getting errror
mongoose.connect("mongodb://localhost:27017/ttchannel", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connection successful..."))
.catch((err)=>console.log(err));

// 2. Schema of document
//Schema = A Mongoose schema defines the structure of the document, default values, validators, etc.,
const playlistSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	ctype:String,
	videos:Number,
	author:String,
	active:Boolean,
	date:{
		type:Date,
		default:Date.now
	}
})


// A Mongoose model is a wrapper on the Mongoose Schema.
// A Mongoose Schema defines the structure of the document, 
// default values, validators, etc., whereas a Mongoose Model 
// provides an interface to the database from creating, querying, 
// updating, deleting records, etc

//collection creation(creating a table)
const Playlist = new mongoose.model("Playlist", playlistSchema);


// 3. inseting Documents( inserting Table)
//create document or (inserting a rows in table)
const createDocument = async()=>{
	try{
		const reactPlaylist = new Playlist({
			name : "React JS",
			ctype : "Front End",
			videos: 80,
			author: "Thapa Tchnical",
			active: true 
		})
		const result = await reactPlaylist.save();
		console.log(result);
	}catch(err){
		console.log(err);	
	}
}	
// createDocument();


// 4: How to Insert Multiple Documents using One Line in Mongoose
// instead of `const result = await reactPlaylist.save();` use 
// this `const result = await Playlist.insertMany([reactPlaylist1, reactPlaylist2, reactPlaylist3,...]);`


// 5. How to Read or Querying
//createDocument();
const getDocument = async()=>{
	const result = await Playlist.find({ctype: "FrontEnd"})
	.select({name:1})
.limit(1);
	console.log(result);
}
getdDocument();