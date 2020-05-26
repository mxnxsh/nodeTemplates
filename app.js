var express  = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var ejs = require("ejs");
var mongoose = require("mongoose");


// Connect to db
mongoose.connect("mongodb://localhost:27017/merge", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Init app
var app = express();

// View engine setup
app.set("views",path.join(__dirname,"views")); 
app.set("view engine","ejs");

// Set public folder
app.use(express.static(path.join(__dirname,"public")));

//Set routes
var start = require("./routes/start.js");
app.use("/",start);

app.listen(3000,function(){
	console.log("Server is running successfully");
});