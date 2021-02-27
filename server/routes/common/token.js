const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');
const { db } = require('../../db');

const genToken = (id) => {
  return jwt.sign({ userId: id }, config.secret, { expiresIn: '1h'});
}

const verifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    try {
      const decoded = jwt.verify(token, config.secret);
      db.admins.readByUsername(decoded.userId).then((row) => {
        if (!row) {
          return res.status(401).json({'message': 'Unauthorized access'});
        } else {
          req.user = { username: decoded.userId };
          next();
        }
      });
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(400).send({'message': 'Invalid token'});
  }
}

module.exports = { genToken, verifyToken };
