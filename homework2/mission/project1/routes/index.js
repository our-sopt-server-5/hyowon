var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//router.use('/api', require('./api'));
router.use('/blog', require('./api/blog/post'));
router.use('/blog', require('./api/users/login'));
router.use('/blog', require('./api/users/signup'));
module.exports = router;
