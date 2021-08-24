class NewsRepository {
    constructor(db, pgp) {
      this.db = db;
      this.pgp = pgp;
    }
  
    // db/repos : 실제 코드들이 작동하는 부분
  
    // async create(values) {
      
    // }
  
    // async post()
    // {
    //   const { semesters, ...courseInfo } = req.body;
    //   db.courses.create(courseInfo)
    //     .then((course) => {
    //       console.log(course);
    //       console.log(semesters);
    //     });
    //   res.send(req.body);
    // }
  
    async readAll() {
      return this.db.any('SELECT * from news');
    }
  
    async readById(id) {
      return this.db.oneOrNone('SELECT * FROM news WHERE id = $1', [id]);
    }
  
    async readCount() {
      return this.db.one('SELECT count(*) FROM news', [], a => +a.count);
    }
  
    async updateById(id) {
      // UPDATE courses SET ... WHERE id = $1
    }
  
    async deleteById(id) {
      return this.db.result('DELETE FROM news WHERE id = $1', id, r => r.rowCount);
    }
  }
  
  module.exports = NewsRepository;
  