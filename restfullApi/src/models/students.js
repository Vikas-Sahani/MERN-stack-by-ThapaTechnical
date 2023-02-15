const mongoose = require("mongoose");
const validator = require("validator");

//defining data and it's validation(like it's type, minlength, etc.)
// url = npmjs.com/package/validator
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        // max:10,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
});

// now we will create models(it means means a new collection(table))
const Student = new mongoose.model('Student', studentSchema) //first parameter should be Singular & Pascal convention

module.exports = Student;
//now this Student is require in app.js file