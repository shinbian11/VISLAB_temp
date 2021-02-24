const { research: sql } = require('../sql');

class ResearchRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  async create(values) {
    return this.db.one(sql.create, {
    });
  }

  async readAll() {
    return this.db.any('SELECT * from research');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM research WHERE id = $1', id);
  }

  async readCount() {
    return this.db.one('SELECT count(*) FROM research', [], a => +a.count);
  }
}

module.exports = ResearchRepository;
