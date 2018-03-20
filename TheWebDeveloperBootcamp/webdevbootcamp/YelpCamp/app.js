var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name:"Salmon Creek", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPlpBgP7dZg1bLkDf2GSb5d5oau2orm4yn9jlmnLC5aI6O-a73g" },
    {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2XJpvVRVXQzhy-SIbgRTPrae5GgJb5YDAzmDiOQ8XqIN00oV" },
    {name:"Mountain Goat's Rest", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpMWfR1nvC_g70rUipFYEbAeoP2FvIqe1KgsJyxE8j5yMhi8w" }
];

app.get("/", function(req,res){
    res.render("landing");
});


app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    // redirect back to campgrounds route
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req,res){
    res.render("new");
});


app.listen(3000, function(){
    console.log("The YelpCamp Server Has Started!!!");
});