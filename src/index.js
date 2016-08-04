// this is where the magic happens
require('dotenv').config();
var express = require('express');
var app = express();

var port = process.env.LISTEN_ON_PORT || 3000;


app.get('/now', function (req, res) {
  res.send(new Date());
});


app.listen(port);

console.log('listening on: ' + port);

setTimeout(function () {
  console.log('I am bored now');
  process.exit(1);
}, 10000);
