class PublicationsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  async create(values) {
    return this.db.one('', { });
  }

  async readAll() {
    return this.db.any('SELECT * from publications');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM publications WHERE id = $1', id);
  }

  async readCount() {
    return this.db.one('SELECT count(*) FROM publications', [], a => +a.count);
  }
}

module.exports = PublicationsRepository;
