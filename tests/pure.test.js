import p, { Pure } from '../src/pure';

test('checks for existance of pure.js', () => {
  const body = p('body');
  
  expect(typeof p).toBe('function');
  expect(body).toBeInstanceOf(NodeList);
  expect(body[0].tagName).toBe('BODY');
  expect(body.$).toBeInstanceOf(Pure);
});
