const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { GET, DELETE } = require('./common/methods');
const { db } = require('../db');

router.post('/c/one', upload.none(), (req, res) => {
  const { semesters, ...courseInfo } = req.body;
  db.courses.create(courseInfo)
    .then((course) => {
      console.log(course);
      console.log(semesters);
    });
  res.send(req.body);
});

GET(router, '/r/all', () => db.courses.readAll());
GET(router, '/r/count', () => db.courses.readCount());
GET(router, '/r/id/:id', (req) => db.courses.readById(req.params.id));

DELETE(router, '/d/id/:id', (req) => db.courses.deleteById(req.params.id));

module.exports = router;
