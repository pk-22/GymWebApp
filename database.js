const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gym_project", { 
    useNewUrlParser: true 
}).then(()=>{
    console.log(`Connected mongodb`);
}).catch((err)=>{
    console.log(`Not connected to mongodb`);
})