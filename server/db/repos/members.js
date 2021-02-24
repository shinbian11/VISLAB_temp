
class MembersRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  async create(values) {
    return this.db.one('', { ...values, enrolled_year: +values.year, enrolled_month: +values.month });
  }

  async readAll() {
    return this.db.any('SELECT * from members');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM members WHERE id = $1', id);
  }

  async readCount() {
    return this.db.one('SELECT count(*) FROM members', [], a => +a.count);
  }
}

module.exports = MembersRepository;
