var express = require("express");
var app = express();

// "/" => "Hi There"
app.get("/", function(req, res){
    res.send("Hi There");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
   res.send("Goodbye"); 
});

// "/dog" => "Meow"
app.get("/dog", function(req, res){
   res.send("Meow"); 
   console.log("request made to /dog");
});

// "/Groomer" => "Groomer name"
app.get("/groomer/:groomerName", function(req, res){
    console.log(req.params);
    var groomer = req.params.groomerName;
    res.send("You have reached " + groomer.toUpperCase() +  "'s groomer page"); 
});

//catch all
app.get("*", function(req, res) {
   res.send("You attempted to load a route that does not exist")
});

app.listen(process.env.PORT, "0.0.0.0", function() {
    console.log("server has started");
});