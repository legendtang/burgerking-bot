#!/usr/bin/env iojs

var app = require('../app');

var config = require('../config');

var server = app.listen(
  process.env.PORT || 3000,
  function () {
    console.log('Server running on ' +
    server.address().address +
    ':' + server.address().port
  );
});
