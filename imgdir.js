const cases = require('./src/cases.js');
const fs = require('fs');
const path = require('path');

function createIfNotExists(repo) {
  const r = repo.replace(/\//g, '-');
  const folder = path.resolve('src/img', r);
  fs.existsSync(folder) || fs.mkdir(folder);
}

cases.forEach((c) => {
  c.repos.forEach((r) => {
    createIfNotExists(r.repo);
  });
});
