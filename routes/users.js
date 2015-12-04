var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


//everyone routed to one endpoint
//endpoint has a unique parameter



//suffix"/anything" else goes to handler
//handler reads url to get to content
//look into Bitly