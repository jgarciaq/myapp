// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));           

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

    person1 = {
       name: 'Jhon Doe',
       email: 'jdoe@gmail.com',
       number: '(111)-111-111'
     };

    person2 = {
      name: 'Jane Smith',
      email: 'jsmith@gmail.com',
      number: '(222)-222-222'
    };

    person3 = {
      name: 'Tim Doe',
      email:'jdoe@gmail.com',
      number: '(333)-333-333'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);

});


app.listen(3000);
console.log("Server running on port 3000");
