
var express = require("express");
var app = express();

//================ROUTES=========================
app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {pig:"Oink",
                  cow:"Moo",
                  dog:"Woof Woof!"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says " + "'"+ sound +"'");
});

app.get("/repeat/:str/:int", function(req,res){
    var num = parseInt(req.params.int);
    var str = req.params.str;
    var result ="";

    for(var i=0;i<num;i++){
        result += str +' ';
    };
    res.send(result);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found. Try again!")
});

app.listen(3000, function(){
    console.log("========== SERVER HAS STARTED!!!========== ")
});