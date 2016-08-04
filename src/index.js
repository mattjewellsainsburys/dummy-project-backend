// this is where the magic happens
var express = require('express');
var uuid = require('uuid');
var app = express();

app.use(function (req, res, next) {
  req.id = uuid.v4();
  res.set('X-Trace-Id', req.id);
  next();
});

app.get('/now', function (req, res) {
  res.send(new Date());
});

app.set('port', process.env.PORT || 1337);

app.listen(app.get('port'));

console.log('listening on port: ' + app.get('port'));
