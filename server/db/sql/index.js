// ref: https://github.com/vitaly-t/pg-promise-demo

const { QueryFile } = require('pg-promise');
const { join: joinPath } = require('path');

module.exports = {
  courses: { create: sql('courses/create.sql'), },
  events: { create: sql('events/create.sql'), },
  members: { create: sql('members/create.sql'), },
  publications: { create: sql('publications/create.sql'), },
  research: { create: sql('research/create.sql'), }
}

function sql(file) {
  const fullPath = joinPath(__dirname, file);
  const options = { minify: true };
  const qf = new QueryFile(fullPath, options);

  if (qf.error) { console.error(qf.error); }
  return qf;
}
