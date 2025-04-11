const mul = require('../../src/component/index.js');

test('mul function', () => {
    expect(mul(2, 3)).toBe(6);
    expect(mul(-1, 5)).toBe(-5);
    expect(mul(0, 10)).toBe(0);
    expect(mul(7, -3)).toBe(-21);
}
);
test('mul function with non-numeric values', () => {
    expect(mul('2', 3)).toBe(6);
    expect(mul(null, 5)).toBe(0);
    expect(mul(undefined, 10)).toBe(NaN);
    expect(mul({}, 3)).toBe(NaN);
}
);
test('mul function with large numbers', () => {        
    expect(mul(1e10, 1e10)).toBe(1e20);
    expect(mul(-1e10, -1e10)).toBe(1e20);
    expect(mul(1e10, -1e10)).toBe(-1e20);
}
);
// test('mul function with decimal numbers', () => {
//     expect(mul(2.5, 4)).toBe(10);
//     expect(mul(-1.5, 3)).toBe(-4.5);
//     expect(mul(0.1, 0.2)).toBe(0.02);
// }
// );
test('mul function with zero', () => {
    expect(mul(0, 0)).toBe(0);
    expect(mul(0, 5)).toBe(0);
    expect(mul(5, 0)).toBe(0);
}
);
test('mul function with negative numbers', () => {
    expect(mul(-2, -3)).toBe(6);
    expect(mul(-2, 3)).toBe(-6);
    expect(mul(2, -3)).toBe(-6);
}
);
test('mul function with large negative numbers', () => {
    expect(mul(-1e10, -1e10)).toBe(1e20);
    expect(mul(-1e10, 1e10)).toBe(-1e20);
}
);
test('mul function with large positive numbers', () => {
    expect(mul(1e10, 1e10)).toBe(1e20);
    expect(mul(1e10, -1e10)).toBe(-1e20);
}
);
test('mul function with large decimal numbers', () => {
    expect(mul(1.5e10, 2)).toBe(3e10);
    expect(mul(-1.5e10, -2)).toBe(3e10);
    expect(mul(1.5e10, -2)).toBe(-3e10);
}
);
test('mul function with large decimal numbers and zero', () => {
    expect(mul(0, 1.5e10)).toBe(0);
    expect(mul(1.5e10, 0)).toBe(0);
}
);
// test('mul function with large decimal numbers and negative values', () => {
//     expect(mul(-1.5e10, 0)).toBe(0);
//     expect(mul(0, -1.5e10)).toBe(0);
// }
// );