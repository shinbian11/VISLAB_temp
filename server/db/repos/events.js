class EventsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  async create(values) {
    return this.db.one('', { });
  }

  async readAll() {
    return this.db.any('SELECT * from events');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM events WHERE id = $1', id);
  }

  async readCount() {
    return this.db.one('SELECT count(*) FROM events', [], a => +a.count);
  }
}

module.exports = EventsRepository;
