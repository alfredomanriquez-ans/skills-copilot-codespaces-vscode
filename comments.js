// Create Web Server
// http://expressjs.com/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create Web Server
// http://expressjs.com/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),

