// this is where the magic happens
var express = require('express');
var app = express();

app.get('/now', function (req, res) {
  res.send(new Date());
});

app.set('port', process.env.PORT || 3000);
