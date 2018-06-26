// @flow
import Pure from './Pure';

export { Pure };

function pure(selector, is_one = false) {
  const selected =  is_one ? document.querySelector(selector) : document.querySelectorAll(selector);

  selected.$ = new Pure(selected);

  return selected;
}

pure.c = cl => {
  const selected =  document.getElementsByClassName(cl);

  selected.$ = new Pure(selected);

  return selected;
};

pure.t = tag => {
  const selected =  document.getElementsByTagName(tag);

  selected.$ = new Pure(selected);

  return selected;
};

pure.i = id => {
  const selected =  document.getElementById(id);

  selected.$ = new Pure(selected);

  return selected;
};

export default pure;
