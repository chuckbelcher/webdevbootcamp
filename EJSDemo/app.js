var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});


app.get("/fallinlovewith/:petName", function(req, res) {
    var petName = req.params.petName;
    res.render("love",
        {
            petName: petName
        }
    );
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "Post 2", author: "Mary"},
        {title: "Post 3", author: "Jill"}
    ];
    
    res.render("posts", {posts:posts});
    
});


//catch all
app.get("*", function(req, res) {
    res.send("Try Aganin");
});



app.listen(process.env.PORT, "0.0.0.0", function() {
    console.log("server has started");
});