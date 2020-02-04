import { capitalize } from '../capitalize';

describe('capitalize', () => {
  it('should return text with upper case first letter', () => {
    const actual = capitalize('hello');
    expect(actual).toEqual('Hello');
  });
});
