console.log("OUR EXPRESS APP WILL GO HERE!");

var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there!!!");
});

app.get("/welcome/:name", function(req, res){
    res.send("Welcome to the new world Tim!!!");
});

app.get("/r/:subredditName", function(req,res){
    console.log(req.params['subredditName']);
    res.send("WELCOE TO SUBREDDIT!!!");
});


app.get("*", function(req,res){
    res.send("WRONG TURN!!!");
});

app.listen(3000, function(){
    console.log("Server has started!!!");
});