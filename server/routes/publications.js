const express = require('express');
const router = express.Router();
const { GET, POST } = require('./common/methods');
const { db } = require('../db');
const { uploadPDF } = require('./common/multer');

/* Create - post */
router.post('/c/test', uploadPDF.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.body.published_in);
    console.log(req.file.path);
    res.send(req.file);
  }
);

/* Read - get */
GET(router, '/r/all', () => db.publications.readAll());
GET(router, '/r/count', () => db.publications.readCount());

/* Update - put */

/* Delete - delete */
// Delete pdf file by ID

module.exports = router;
