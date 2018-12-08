const statement = require('./index');

const fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

function readJson(filename) {
  return JSON.parse(read(filename));
}

test('statement', () => {
  const invoices = readJson('invoices.json');
  const plays = readJson('plays.json');
  const results = readJson('results.json');

  for (let i = 0; i < invoices.length; i++) {
    expect(statement(invoices[i], plays)).toBe(results[i]);
  }
});
