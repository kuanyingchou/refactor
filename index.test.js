const { statement, htmlStatement } = require('./index');

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
  const plainTextResults = readJson('text-results.json');
  const htmlResults = readJson('html-results.json');

  for (let i = 0; i < invoices.length; i++) {
    expect(statement(invoices[i], plays)).toBe(plainTextResults[i]);
    expect(htmlStatement(invoices[i], plays)).toBe(htmlResults[i]);
  }
});
