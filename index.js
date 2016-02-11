var express = require('express');
var app = express();

var proxy = require('express-http-proxy');
 
var app = require('express')();
var Url = require('url');

const PORT = process.env.PORT || 3333;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
 
app.use('/auth', proxy('http://api.are.na', {
  forwardPath: function(req, res) {
  	var urlObj = Url.parse(req.url);
  	urlObj.query = {access_token: ACCESS_TOKEN};
    return Url.format(urlObj);
  }
}));

app.listen(PORT)
console.log(`Listening on port ${PORT}`)