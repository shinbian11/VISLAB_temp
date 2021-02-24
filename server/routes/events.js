const express = require('express');
const router = express.Router();
const { GET, POST } = require('./common/methods');
const { db } = require('../db');

GET(router, '/r/all', () => db.events.readAll());

module.exports = router;
