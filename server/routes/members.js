const express = require('express');
const router = express.Router();
const { GET, POST } = require('./common/methods');
const { db } = require('../db');

GET(router, '/r/all', () => db.members.readAll());
GET(router, '/r/count', () => db.members.readCount());
GET(router, '/r/id/:id', (req) => db.members.readById(req.params.id));

POST(router,'/r/post', () => db.members.post());

module.exports = router;
