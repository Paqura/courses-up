import { isTypeOfString } from '../isTypeof';

describe('isTypeOfString', () => {
  it('should return true', () => {
    const actual = isTypeOfString('hello');
    expect(actual).toBe(true);
  });

  it('should return false', () => {
    const actual1 = isTypeOfString(undefined);
    const actual2 = isTypeOfString(2);
    const actual3 = isTypeOfString(null);
    const actual4 = isTypeOfString({});

    expect(actual1).toBe(false);
    expect(actual2).toBe(false);
    expect(actual3).toBe(false);
    expect(actual4).toBe(false);
  });
});