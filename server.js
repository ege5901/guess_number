var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var http = require('http').createServer(app);
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

app.get('/:path', function (req, res) {
    urlpath = req.params.path;
    
    res.sendFile(path.join(__dirname+"/"+urlpath));
    
})

http.listen(port)
  console.log("started");