const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { GET, DELETE, POST, PUT } = require('./common/methods');
const { db } = require('../db');

GET(router, '/r/all', () => db.news.readAll());
GET(router, '/r/count', () => db.news.readCount());
GET(router, '/r/id/:id', (req) => db.news.readById(req.params.id));

DELETE(router, '/d/id/:id', (req) => db.news.deleteById(req.params.id));

module.exports = router;