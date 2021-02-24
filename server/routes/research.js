const express = require('express');
const router = express.Router();
const { GET, POST } = require('./common/methods');
const { db } = require('../db');

GET(router, '/r/all', () => db.research.readAll());
GET(router, '/r/count', () => db.research.readCount());

module.exports = router;
