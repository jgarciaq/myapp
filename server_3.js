// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));           

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

});


app.listen(3000);
console.log("Server running on port 3000");
