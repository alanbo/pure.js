import p from '../src/p';
import Pure from '../src/Pure';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="sample">
      <p>sample text</p>
    </div>
    <div>
    </div>
    <div class="iterate"></div>
    <div class="iterate"></div>
    <div class="iterate"></div>
    <div class="iterate"></div>
    <div id="sample_id" class="iterate"></div>
  `;

});


test('checks for existance of pure.js', () => {
  const body = p('body');
  console.log(body);
  expect(p).toBeDefined();
  expect(body.$).toBeDefined();
  expect(body.$).toBeInstanceOf(Pure);
  expect(typeof p).toBe('function');
});


test('checks if quering works', () => {
  const body = p('body');

  expect(body).toBeInstanceOf(NodeList);
  expect(body[0].tagName).toBe('BODY');
  expect(p('div:last-child')[0].id).toBe('sample_id');
});


test('checks if quering one element works', () => {
  const body = p.one('body');
  const last_div = p.one('div:last-child');

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

test('checks if null results return Pure interface', () => {
  const null_p = p('.non-existant-class');
  const null_one = p.one('.non-existant-class');
  const null_c = p.c('non-existant-class');
  const null_t = p.t('blockquote');
  const null_i = p.i('non-existant-id');

  expect(null_p.$).toBeInstanceOf(Pure);
  expect(null_one.$).toBeInstanceOf(Pure);
  expect(null_c.$).toBeInstanceOf(Pure);
  expect(null_t.$).toBeInstanceOf(Pure);
  expect(null_i.$).toBeInstanceOf(Pure);
});

describe('Each method', () => {
  test('Iterates over html collection', () => {
    let iterations = 0;
    const elems = p.c('iterate');
    elems.$.each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });
    
    expect(iterations).toEqual(elems.length);
  });

  test('Iterates over NodeList', () => {
    let iterations = 0;
    const elems = p.t('div');

    elems.$.each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });

    expect(iterations).toEqual(elems.length);
  });

  test('Runs callback over one HTMLElement', () => {
    let iterations = 0;

    p.one('div').$.each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });

    expect(iterations).toEqual(1);
  });
});
