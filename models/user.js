const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    phone: {
        type: Number,
        required : true,
        unique : true
    },
    gender: {
        type: String,
        required : true
    },
    address: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    // tokens:[{
    //     token:{
    //         type:String,
    //         required:true
    //     }
    // }]
}) ;
UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);

    }
    next();
})
const User = new mongoose.model("User", UserSchema);
module.exports = User;