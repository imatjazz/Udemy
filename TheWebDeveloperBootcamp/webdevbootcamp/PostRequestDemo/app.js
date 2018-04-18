var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ['Tim', 'Morizt', 'Adam', 'Daniel','Michele', 'Judy'];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.render("home");
});

app.post("/addfriend", function(req,res){  
    console.log(req.body);
    var newfriend = req.body.name;
    friends.push(newfriend);
    //res.send("You have reached the POST Route!!!")
    res.redirect("/friends");
});

app.get("/friends", function(req,res){    
    res.render("friends", {friends:friends});
});

app.listen(3000, function(){
    console.log("================== SERVER HAS STARTED =================")
});