var express = require('express');
var router = express.Router();
var appdata = require('../data.json')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

/* GET home page. */
router.get('/june4', function(req, res) {
  var setlist = appdata.metaldata.june4.setlist;
  var songLinks = appdata.metaldata.june4.songlinks;

  res.render('setlistPage', { 
    date: 'June 4',
    night: 1, 
    set: setlist,
    links: songLinks
  });
});

router.get('/june6', function(req, res) {
  var setlist = appdata.metaldata.june6.setlist;
  var songLinks = appdata.metaldata.june6.songlinks;

  res.render('setlistPage', { 
    date: 'June 6',
    night: 2,
    set: setlist,
    links: songLinks 
  });
});

router.get('/june7', function(req, res) {
  var setlist = appdata.metaldata.june7.setlist;
  var songLinks = appdata.metaldata.june7.songlinks;

  res.render('setlistPage', { 
    date: 'June 7',
    night: 3,
    set: setlist,
    links: songLinks 
  });
});

router.get('/*', function(req, res) {
  res.render('error', {});
});

module.exports = router;
