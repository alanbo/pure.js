// @flow

import type {
  PureAdded,
  ArrayLikePure,
  HtmlElemListPure,
  HtmlElemPure,
  HtmlCollectionPure,
  HtmlAll
} from './types/html-types';


class Pure {
  +elem: HtmlAll;

  constructor(elem: HtmlAll) {
    this.elem = elem;
  }

  each(callback: (html_element: HTMLElement) => any) {
    if (this.elem instanceof HTMLCollection || this.elem instanceof NodeList) {
      for (let i = 0; i < this.elem.length; i++) {
        const pure_elem = this.elem[i];
        pure_elem.$ = new Pure(this.elem[i]);
        callback(this.elem[i]);
      }
    } else if (this.elem instanceof HTMLElement) {
      callback(this.elem);
    } else {
      console.log('You are calling .each() method on an empty element');
    }

    return this;
  }

  addClass(name: string) {
    this.each(elem => elem.classList.add(name));
  }

  removeClass(name: string) {
    this.each(elem => elem.classList.remove(name));
  }

  toggleClass(name: string) {
    this.each(elem => elem.classList.toggle(name));
  }

  setAttr(name: string, value: string) {
    this.each(elem => elem.setAttribute(name, value));
  }

  removeAttr(name: string) {
    this.each(elem => elem.removeAttribute(name));
  }
}

export default Pure;
