class CoursesRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }

  // db/repos : 실제 코드들이 작동하는 부분

  async create(values) {
    return this.db.one('INSERT INTO courses(${this:name}) VALUES(${this:csv}) RETURNING *',
      {...values, is_visible: values.is_visible === 'true'});
  }

  // async post()
  // {
  //   const { semesters, ...courseInfo } = req.body;
  //   console.log('req? ' + req);
  //   console.log('req.body? ' + req.body);
  //   db.courses.create(courseInfo)
  //     // .then((course) => {
  //     //   console.log(course);
  //     //   console.log(semesters);
  //     // });
  //   res.send(req.body);
  // }

  async readAll() {
    return this.db.any('SELECT * from courses');
  }

  async readById(id) {
    return this.db.oneOrNone('SELECT * FROM courses WHERE id = $1', [id]);
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
