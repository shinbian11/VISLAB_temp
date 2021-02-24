const { courses: sql } = require('../sql');

class CoursesRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  async create(values) {
    return this.db.one('INSERT INTO courses(${this:name}) VALUES(${this:csv}) RETURNING *',
      {...values, is_visible: values.is_visible === 'true'});
  }

  async readAll() {
    return this.db.any('SELECT * from courses');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM courses WHERE id = $1', id);
  }

  async readCount() {
    return this.db.one('SELECT count(*) FROM courses', [], a => +a.count);
  }

  async updateById(id) {
    // UPDATE courses SET ... WHERE id = $1
  }

  async deleteById(id) {
    return this.db.result('DELETE FROM courses WHERE id = $1', id, r => r.rowCount);
  }
}

module.exports = CoursesRepository;
