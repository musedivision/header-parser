var express =  require('express');
var app = express()
var parse = require('./headerParse');

var port = process.env.PORT || 8080


app.get('/whoami', function(req,res){

  res.send(parse(req))
})

app.listen(port, function(){
  console.log("Express.js server running on port: ", port)
})
