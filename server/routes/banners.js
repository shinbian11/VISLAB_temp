const express = require('express');
const router = express.Router();
const { POST_FORM } = require('./common/methods');
const { db } = require('../db');
const { uploadBanner } = require('./common/multer');
const assets = require('../config/assets.json');
const resizeImage = require('./common/resize');

/* Create - post */
POST_FORM(router, '/c/test', uploadBanner.single('file'), (req, res) => {
  resizeImage(req.file.path, 167, 167);
  req.file.path = assets.banner_static + '/' + req.file.filename;
  res.send(req.file);
});

/* Read - get */
/*
GET(router, '/r/all', () => db.publications.readAll());
GET(router, '/r/count', () => db.publications.readCount());
*/

/* Update - put */

/* Delete - delete */
// Delete pdf file by ID

module.exports = router;
