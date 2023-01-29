const sum = require('./sum');

test('adds 0 + 2 to equal 2', () => {
  expect(sum(0, 2)).toBe(2);
});

test('adds 100 + 2 to equal 102', () => {
    expect(sum(100, 2)).toBe(102);
  });

  test('adds 10030 + 2 to equal 10032', () => {
    expect(sum(10030, 2)).toBe(10032);
  });


  test('adds 420580 + 2 to equal 420582', () => {
    expect(sum(420580, 2)).toBe(420582);
  });

  test('adds 0 + -99 to equal -99', () => {
    expect(sum(0, -99)).toBe(-99);
  });
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('adds -99 + -99 to equal -198', () => {
    expect(sum(-99, -99)).toBe(-198);
  });
  