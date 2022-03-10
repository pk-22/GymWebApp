require("dotenv").config();
const express = require('express'),
    app = express(),
    bcrypt = require("bcryptjs"),
    mongoose = require("mongoose"),
    path = require("path"),
    bodyParser = require("body-parser"),
    User = require("./models/user");
// const auth = require("./middleware/auth");
// const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated");
// const setUserVal = require("./middleware/setUserVal");
//Connecting database
require("./database.js");

app.use(require("express-session")({
    secret: "Project",       //decode or encode session
    resave: false,
    saveUninitialized: true,
}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded(
    { extended: false }
))
//=======================
//      R O U T E S
//=======================
app.get("/", (req, res) => {
    res.render("home");
})

//Listen On Server
app.listen(process.env.PORT || 8000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started At Port 8000");
    }

});