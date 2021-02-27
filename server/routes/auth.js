const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { GET, POST } = require('./common/methods');
const { db } = require('../db');
const { genToken } = require('./common/token');

const saltRounds = 10;

const hashPassword = (plain, handler) => { bcrypt.hash(plain, saltRounds, (err, hashed) => handler(hashed)); };
const checkPassword = (plain, hashed, handler) => { bcrypt.compare(plain, hashed, (err, res) => handler(res)); }

router.post('/login', upload.none(), (req, res) => {
  try {
    db.admins.readByUsername(req.body.username).then((row) => {
      if (row) {
        checkPassword(req.body.password, row.password, (passed) => {
          if (passed) {
            res.status(200).send({'success': true, 'token': genToken(row.username)});
          } else {
            res.status(400).json({'success': false, 'message': 'Incorrect credentials'});
          }
        });
      } else {
        res.status(400).json({'success': false, 'message': 'Incorrect credentials'});
      }
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

/*
router.get('/gen/:pwd', (req, res) => {
  hashPassword(req.params.pwd, (hashed) => {
    console.log(hashed);
    res.json({success: true, hashed});
  });
});

router.get('/check/:pwd', (req, res) => {
  checkPassword(req.params.pwd, temp, (passed) => {
    console.log(passed);
    res.json({success: true, passed});
  })
});
 */

module.exports = router;
