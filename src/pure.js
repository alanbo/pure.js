class Pure {

}

export { Pure };

function pure(selector) {
  const selected =  document.querySelectorAll(selector);

  selected.$ = new Pure;

  return selected;
}

export default pure;
