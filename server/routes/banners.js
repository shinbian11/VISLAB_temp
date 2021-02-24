const express = require('express');
const router = express.Router();
const { GET } = require('./common/methods');
const { db } = require('../db');
const { uploadBanner } = require('./common/multer');
const resizeImage = require('./common/resize');

/* Create - post */
router.post('/c/test',
  uploadBanner.single('file'),
  (req, res) => {
    resizeImage(req.file.path, 167, 167); // member photo => 167
    res.send(req.file);
  }
);

/* Read - get */
/*
GET(router, '/r/all', () => db.publications.readAll());
GET(router, '/r/count', () => db.publications.readCount());
*/

/* Update - put */

/* Delete - delete */
// Delete pdf file by ID

module.exports = router;
