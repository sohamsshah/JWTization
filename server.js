// A Web service for JWT Token Authentication

/* 
Dependancies: 
    Runtime Environment: Node.js  
    Back-end Framework: Express 
    Database: MongoDB
    Middleware: Passport.js
*/

var express = require("express");
var bodyParser = require("body-parser");
app = express();
var morgan = require("morgan"); //Logger Middleware function
var mongoose = require("mongoose"); //MongoDB Object Modelling Tool
var cors = require("cors"); //for cross origin possibilities
var passport = require("passport");
var config = require("./config/database");
var port = process.env.PORT || 3000;

// Configuring our application

mongoose.connect(config.db, 
    { useMongoClient: true });

mongoose.Promise = global.Promise;
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.set('view engine', 'ejs'); //Comment this out when you are using 


require('./routes/routes_2')(app,passport); 
// Write require('./routes/routes')(app,passport); for Postman-based Application
app.listen(port, function(){
    console.log("Server is running on port 3000");
});
