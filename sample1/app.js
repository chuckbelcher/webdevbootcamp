var express = require("express");
var app = express();

// "/" => "Hi There"
app.get("/", function(req, res){
    res.send("Hi There, welcome to the assignment");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    };
    var sound = sounds[animal];
    if (!sound) {
        res.send("You selected an unknown animal");
    } else {
        res.send(animal + " says " + sound);
    }
});

app.get("/repeat/:phrase/:numTimes", function(req, res) {
   var phrase = req.params.phrase;
   var numTimes = Number(req.params.numTimes);
   var message = "";
   for (var i = 0; i < numTimes; i++) {
       message = message + phrase + " ";
   }
   res.send(message);
});

//catch all
app.get("*", function(req, res) {
   res.send("You attempted to load a route that does not exist")
});

app.listen(process.env.PORT, "0.0.0.0", function() {
    console.log("server has started");
});