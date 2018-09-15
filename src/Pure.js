// @flow
export type HtmlAll = NodeList<HTMLElement> | HTMLElement | HTMLCollection<HTMLElement> | null;


class Pure {
  +_elem: HtmlAll;

  constructor(elem: HtmlAll) {
    this._elem = elem;
  }

  on(event_name: string, callback: (Event) => any): Pure {
    this.each(elem => {
      elem.addEventListener(event_name, callback);
    });

    return this;
  }

  trigger(event_name: string, data?: Object): Pure {
    // $FlowFixMe
    const is_native: boolean = typeof document.body[`on${event_name}`] !== 'undefined';
    let event: Event;

    if (is_native) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(event_name, true, false);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(event_name, true, true, data);
    }

    this.each(element => {
      element.dispatchEvent(event);
    });

    return this;
  }

  each(callback: (html_element: HTMLElement) => any): Pure {
    if (this._elem instanceof HTMLCollection || this._elem instanceof NodeList) {
      [...this._elem].forEach(elem => callback(elem));
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
