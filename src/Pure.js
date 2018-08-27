// @flow
export type HtmlAll = NodeList<HTMLElement> | HTMLElement | HTMLCollection<HTMLElement> | null;


class Pure {
  +_elem: HtmlAll;

  constructor(elem: HtmlAll) {
    this._elem = elem;
  }

  each(callback: (html_element: HTMLElement) => any): Pure {
    if (this._elem instanceof HTMLCollection || this._elem instanceof NodeList) {
      for (let i = 0; i < this._elem.length; i++) {
        callback(this._elem[i]);
      }
    } else if (this._elem instanceof HTMLElement) {
      callback(this._elem);
    }

    return this;
  }

  addClass(name: string): Pure {
    this.each(elem => elem.classList.add(name));

    return this;
  }

  removeClass(name: string): Pure {
    this.each(elem => elem.classList.remove(name));

    return this;
  }

  toggleClass(name: string): Pure {
    this.each(elem => elem.classList.toggle(name));

    return this;
  }

  setAttr(name: string, value: string): Pure {
    this.each(elem => elem.setAttribute(name, value));

    return this;
  }

  removeAttr(name: string): Pure {
    this.each(elem => elem.removeAttribute(name));

    return this;
  }

  domify(): HtmlAll {
    return this._elem;
  }
}

export default Pure;
