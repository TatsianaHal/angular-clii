import { TestingPipe } from './testing.pipe';

describe('TestingPipe', () => {

  let pipe;
  beforeEach(() => {
    pipe = new TestingPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // тестирование пайпа:
  it('should transform', () => {
    expect(pipe.transform('123')).toBe('321');
  });

  it('should throw an arror', () => {
    expect(() => {
      pipe.transform({ a: 3});
    }).toThrowError('TestingPipe: not a string');
  });
});
