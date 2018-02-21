var express = require('express'),
    json = require('express-json');
 
var app = express()
  .use(json())
  .use(function (req, res) {
    res.json({
        message: 'Hello World!'
    });
  })
  .listen(3000);
