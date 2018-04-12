import { add, sub } from "../";

describe("function add", () => {
  const tests: Array<{
    x: number;
    y: number;
    want: number;
  }> = [{
    x: 1,
    y: 1,
    want: 2,
  }, {
    x: 100000000000,
    y: 100000000000,
    want: 200000000000,
  }, {
    x: -1,
    y: 1,
    want: 0,
  }];

  tests.forEach(test => {
    const { x, y , want } = test;
    it(`should success correctly. ${x} + ${y} = ${want}`, () => {
      expect(add(x, y)).toBe(want);
    });
  });
});

describe("function sub", () => {
  const tests: Array<{
    x: number;
    y: number;
    want: number;
  }> = [{
    x: 1,
    y: 1,
    want: 0,
  }, {
    x: 100000000001,
    y: 100000000000,
    want: 1,
  }, {
    x: -1,
    y: 100,
    want: -101,
  }];

  tests.forEach(test => {
    const { x, y , want } = test;
    it(`should success correctly. ${x} - ${y} = ${want}`, () => {
      expect(sub(x, y)).toBe(want);
    });
  });
});
