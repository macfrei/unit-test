import greet from './greet.js';

// test suit: describe

// test case: it

describe('greet', () => {
  it('returns "Hello Coach!" when input is "Lene"', () => {
    const result = greet('Lene');
    expect(result).toBe('Hello Coach!');
  });

  it('returns "Hello you!" when input is not given', () => {
    const result = greet();
    expect(result).toBe('Hello you!');
  });

  it('returns "Hello Merle!" when name is "Merle"', () => {
    const result = greet('Merle');
    expect(result).toBe('Hello Merle!');
  });
});
