var express = require('express')
var serveStatic = require('serve-static')

var app = express();

app.use(serveStatic(__dirname + '/'));

console.log('nothin but static');
app.listen(3000);
