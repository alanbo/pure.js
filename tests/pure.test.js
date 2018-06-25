import p, { Pure } from '../src/pure';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="sample">
      <p>sample text</p>
    </div>
    <div id="sample_id">
    </div>
  `;

});


test('checks for existance of pure.js', () => {
  const $body = p('body');
  expect(p).toBeDefined();
  expect($body.$).toBeDefined();
  expect($body.$).toBeInstanceOf(Pure);
  expect(typeof p).toBe('function');
});


test('checks if quering works', () => {
  const body = p('body');

  expect(body).toBeInstanceOf(NodeList);
  expect(body[0].tagName).toBe('BODY');
  expect(p('div:last-child')[0].id).toBe('sample_id');
});


test('checks if quering one element works', () => {
  const body = p('body', true);
  const last_div = p('div:last-child', true);

  expect(body).toBeInstanceOf(HTMLBodyElement);
  expect(body.tagName).toBe('BODY');
  expect(last_div.id).toBe('sample_id');
});


test('checks if selection by class name works', () => {
  const div = p.c('sample');
  expect(div).toBeInstanceOf(HTMLCollection);
});


test('checks if selection by class name works', () => {
  const div = p.c('sample');
  expect(div).toBeInstanceOf(HTMLCollection);
});


test('checks if selection by tag name works', () => {
  const paragraphs = p.t('p');
  expect(paragraphs).toBeInstanceOf(HTMLCollection);
  expect(paragraphs[0]).toBeInstanceOf(HTMLParagraphElement);
});


test('checks if selection by id works', () => {
  const div = p.i('sample_id');
  expect(div).toBeInstanceOf(Element);
});
