const sum = require('../../src/home/index.js');

test('sum function', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 5)).toBe(4);
    expect(sum(0, 10)).toBe(10);
    expect(sum(7, -3)).toBe(4);
}
);
test('sum function with non-numeric values', () => {
    expect(sum('1', 2)).toBe(3);
    expect(sum(null, 5)).toBe(5);
    expect(sum(undefined, 10)).toBe(10);
    expect(sum({}, 3)).toBe(3);
}
);
test('sum function with large numbers', () => {        
    expect(sum(1e10, 1e10)).toBe(2e10);
    expect(sum(-1e10, -1e10)).toBe(-2e10);
    expect(sum(1e10, -1e10)).toBe(0);
}
);
test('sum function with decimal numbers', () => {
    expect(sum(2.5, 4)).toBe(6.5);
    expect(sum(-1.5, 3)).toBe(1.5);
    expect(sum(0.1, 0.2)).toBe(0.3);
}
);
test('sum function with zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
}
);
test('sum function with negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
    expect(sum(-2, 3)).toBe(1);
    expect(sum(2, -3)).toBe(-1);
}
);
test('sum function with large negative numbers', () => {
    expect(sum(-1e10, -1e10)).toBe(-2e10);
    expect(sum(-1e10, 1e10)).toBe(0);
}
);
test('sum function with large positive numbers', () => {
    expect(sum(1e10, 1e10)).toBe(2e10);
    expect(sum(1e10, -1e10)).toBe(0);
}
);
test('sum function with large decimal numbers', () => {
    expect(sum(1.5e10, 2)).toBe(1.5e10 + 2);
    expect(sum(-1.5e10, -2)).toBe(-1.5e10 - 2);
    expect(sum(1.5e10, -2)).toBe(1.5e10 - 2);
}
);