// @flow
import Pure from './Pure';

function pure(selector: string): Pure  {
  let selected: NodeList<HTMLElement> | null = document.querySelectorAll(selector);

  return (new Pure(selected));
}


pure.one = (selector: string): Pure => {
  let selected: HTMLElement | null =  document.querySelector(selector);

  return (new Pure(selected));
}


pure.c = (cl: string): Pure => {
  let selected: HTMLCollection<HTMLElement> | null =  document.getElementsByClassName(cl);

  return (new Pure(selected));
};


pure.t = (tag: string): Pure => {
  let selected: HTMLCollection<HTMLElement> | null =  document.getElementsByTagName(tag);

  return (new Pure(selected));
};


pure.i = (id: string): Pure => {
  let selected: HTMLElement | null =  document.getElementById(id);

  return (new Pure(selected));
};

export default pure;
