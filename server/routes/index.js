var express = require('express');
var router = express.Router();
const { verifyToken } = require('./common/token');

/* GET home page. */
router.get('/', verifyToken, (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
