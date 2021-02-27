class AdminsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }

  async readByUsername(name) {
    return this.db.oneOrNone('SELECT * FROM admins WHERE username = $1', [name]);
  }
}

module.exports = AdminsRepository;
