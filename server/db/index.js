const promise = require('bluebird');
const pgPromise = require('pg-promise');
const config = require('../config/config.json');
const { Diagnostics } = require('./diagnostics');
const { Admins, Courses, Events, Members, Publications, Research } = require('./repos');

const initOptions = {
  promiseLib: promise,
  extend(obj, dc) {
    obj.admins = new Admins(obj, pgp);
    obj.courses = new Courses(obj, pgp);
    obj.events = new Events(obj, pgp);
    obj.members = new Members(obj, pgp);
    obj.publications = new Publications(obj, pgp);
    obj.research = new Research(obj, pgp);
  }
}
const pgp = pgPromise(initOptions);
const db = pgp(config);
Diagnostics.init(initOptions);

module.exports = { db, pgp };
