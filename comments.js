// Create web server application with Node.js.
// This file contains the path to the comments page.

// Import modules
var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

// Import custom modules
var config = require('../config');
var utils = require('../utils');

// GET comments page
router.get('/', function(req, res, next) {
  var filePath = path.join(config.commentsDir, config.commentsFile);
  var comments = utils.readJSONFile(filePath);
  res.render('comments', { title: config.commentsPageTitle, comments: comments });
});

// POST comments page
router.post('/', function(req, res, next) {
  var filePath = path.join(config.commentsDir, config.commentsFile);
  var comments = utils.readJSONFile(filePath);
  comments.push(req.body);
  utils.writeJSONFile(filePath, comments);
  res.render('comments', { title: config.commentsPageTitle, comments: comments });
});

module.exports = router;