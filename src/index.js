// this is where the magic happens
var express = require('express');
var path = require('path');
var uuid = require('uuid');
var app = express();

var knex = require('./createKnexConnection')();

app.use(function (req, res, next) {
  req.id = uuid.v4();
  res.set('X-Trace-Id', req.id);
  next();
});

app.get('/now', function (req, res) {
  res.send(new Date());
});

app.get('/when', function (req, res) {
  var offset = req.params.offset;
  var offsetInt = parseInt(offset, 10) || 0;
  res.send(new Date(Date.now() + offsetInt));
});

app.get('/hello', function (req, res) {
  // no idea why req.params.name doesn't work here
  var name = req.param('name');
  // I KNOW THIS IS GROSS
  knex.select('visits')
    .from('users')
    .where({name: name})
    .limit(1)
    .then(function (users) {
      if (users.length) {
        return knex.table('users')
          .where({name: name})
          .update({visits: users[0].visits + 1})
      } else {
        return knex.insert({name: name, visits: 1}).into('users');
      }
    })
    .then(function () {
      return knex.select('name', 'visits')
        .from('users')
    }).then(res.send.bind(res), res.send.bind(res));
});

app.set('port', process.env.PORT || 1337);

app.listen(app.get('port'));

console.log('listening on port: ' + app.get('port'));
