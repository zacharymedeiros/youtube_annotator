var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

//router.get('/', function(req, res) {
//	res.render('index', {
//		title: 'YouTubeAnnotator'
//	});	
//});


router.get('/', function(req, res) {
	res.render('index', {
		title: 'YouTubeAnnotator'
	});	
});


router.get('/ayy', function (req, res) {
  res.render('index', title: 'Hey');
});

module.exports = router;


