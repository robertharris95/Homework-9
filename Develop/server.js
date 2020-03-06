var express = require("express");
var path = require("path");
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 8080;
var Note = require('./note')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//DATA
var notes = [];

//ROUTES

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
app.get("/notes", function(req, res) {
   res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
app.get("/api/notes", function(req, res) {
    res.json(notes);
});

app.post("/api/notes", function(req, res) {
    const newNote =req.body
    let note = new Note(newNote.title, newNote.content, id);
    notes.push(note);
    console.log(notes)
});

app.delete("/api/notes/:id", function(req, res){

});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

console.log(notes);