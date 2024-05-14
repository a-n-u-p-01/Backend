const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("Request Url: "+req.url);
    next();
});

app.use( function(req, res, next) {
    console.log("Request Type: "+req.url);
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/profile', function (req, res) {
    res.send('Hello Profile')
  });
  
app.listen(4000);