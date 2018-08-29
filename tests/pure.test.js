import p from '../src/p';
import Pure from '../src/Pure';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="sample">
      <p>sample text</p>
    </div>
    <div>
    </div>
    <div class="iterate" data-removable="to-be-removed"></div>
    <div class="iterate"></div>
    <div class="iterate"></div>
    <div class="iterate"></div>
    <div id="sample_id" class="iterate last sample"></div>
  `;
});


test('checks for existance of pure.js', () => {
  const body = p('body');
  console.log(body);
  expect(p).toBeDefined();
  expect(body).toBeDefined();
  expect(body).toBeInstanceOf(Pure);
  expect(typeof p).toBe('function');
});


test('checks if quering works', () => {
  const body = p('body');

  expect(body.domify()).toBeInstanceOf(NodeList);
  expect(body.domify()[0].tagName).toBe('BODY');
  expect(p('div:last-child').domify()[0].id).toBe('sample_id');
});


test('checks if quering one element works', () => {
  const body = p.one('body');
  const last_div = p.one('div:last-child');

  expect(body.domify()).toBeInstanceOf(HTMLBodyElement);
  expect(body.domify().tagName).toBe('BODY');
  expect(last_div.domify().id).toBe('sample_id');
});


test('checks if selection by class name works', () => {
  const div = p.c('sample');
  expect(div.domify()).toBeInstanceOf(HTMLCollection);
});


test('checks if selection by class name works', () => {
  const div = p.c('sample');
  expect(div.domify()).toBeInstanceOf(HTMLCollection);
});


test('checks if selection by tag name works', () => {
  const paragraphs = p.t('p');
  expect(paragraphs.domify()).toBeInstanceOf(HTMLCollection);
  expect(paragraphs.domify()[0]).toBeInstanceOf(HTMLParagraphElement);
});


test('checks if selection by id works', () => {
  const div = p.i('sample_id');
  expect(div.domify()).toBeInstanceOf(Element);
});

test('checks if null results return Pure interface', () => {
  const null_p = p('.non-existant-class');
  const null_one = p.one('.non-existant-class');
  const null_c = p.c('non-existant-class');
  const null_t = p.t('blockquote');
  const null_i = p.i('non-existant-id');

  expect(null_p).toBeInstanceOf(Pure);
  expect(null_one).toBeInstanceOf(Pure);
  expect(null_c).toBeInstanceOf(Pure);
  expect(null_t).toBeInstanceOf(Pure);
  expect(null_i).toBeInstanceOf(Pure);
});

describe('Each method', () => {
  test('Iterates over html collection', () => {
    let iterations = 0;
    const elems = p.c('iterate');
    elems.each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });

    expect(iterations).toEqual(elems.domify().length);
  });

  test('Iterates over NodeList', () => {
    let iterations = 0;
    const elems = p.t('div');

    elems.each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });

    expect(iterations).toEqual(elems.domify().length);
  });

  test('Runs callback over one HTMLElement', () => {
    let iterations = 0;

    p.one('div').each(elem => {
      expect(elem).toBeInstanceOf(HTMLElement);
      iterations++;
    });

    expect(iterations).toEqual(1);
  });
});

describe('Css class methods', () => {
  test('add class works', () => {
    const div = p('div');

    div.addClass('add-class-works');
    expect(document.querySelector('div').classList.contains('add-class-works')).toBeTruthy();
    expect(document.querySelector('.last').classList.contains('add-class-works')).toBeTruthy();
  });

  test('remove class works', () => {
    const div = p('div');

    div.removeClass('sample');
    expect(document.querySelector('div').classList.contains('sample')).toBeFalsy();
    expect(document.querySelector('.last').classList.contains('sample')).toBeFalsy();
  });

  test('toggle class works', () => {
    const div = p('div');

    div.toggleClass('toggle-class-works');
    expect(document.querySelector('div').classList.contains('toggle-class-works')).toBeTruthy();
    expect(document.querySelector('.last').classList.contains('toggle-class-works')).toBeTruthy();
    div.toggleClass('toggle-class-works');
    expect(document.querySelector('div').classList.contains('toggle-class-works')).toBeFalsy();
    expect(document.querySelector('.last').classList.contains('toggle-class-works')).toBeFalsy();
  });
});

describe('Attribute handling', () => {
  test('setting attribute works', () => {
    const div = p('div');

    div.setAttr('data-sample', 'sample-data');

    div.each(elem => {
      expect(elem.hasAttribute('data-sample')).toBeTruthy();
      expect(elem.getAttribute('data-sample')).toEqual('sample-data');
    });

  });

  test('removing attribute works', () => {
    const div = p('div');
    div.removeAttr('data-removable');

    div.each(elem => {
      expect(elem.hasAttribute('data-removable')).toBeFalsy();
    });

  });

});
