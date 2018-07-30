// @flow
import Pure from './Pure';
import type {
  PureAdded,
  HtmlElemListPure,
  HtmlElemPure,
  HtmlCollectionPure
} from './types/html-types';


function pure(selector: string): PureAdded  {
  let selected: any = document.querySelectorAll(selector);

  if (selected) {
    selected.$ = new Pure(selected);
    (selected: HtmlElemListPure);
  } else {
    selected = {
      $: new Pure(null)
    }
  }

  return selected;
}


pure.one = (selector: string): HtmlElemPure | PureAdded => {
  let selected: any =  document.querySelector(selector);

  if (selected) {
    selected.$ = new Pure(selected);
    (selected: HtmlElemPure);
  } else {
    selected = {
      $: new Pure(null)
    }
  }

  return selected;
}


pure.c = (cl: string): HtmlCollectionPure | PureAdded => {
  let selected: any =  document.getElementsByClassName(cl);

  if (selected) {
    selected.$ = new Pure(selected);
    (selected: HtmlCollectionPure);
  } else {
    selected = {
      $: new Pure(null)
    }
  }

  return selected;
};


pure.t = (tag: string): HtmlCollectionPure | PureAdded => {
  let selected: any =  document.getElementsByTagName(tag);

  if (selected) {
    selected.$ = new Pure(selected);
    (selected: HtmlCollectionPure);
  } else {
    selected = {
      $: new Pure(null)
    }
  }

  return selected;
};


pure.i = (id: string): HtmlElemPure | PureAdded => {
  let selected: any =  document.getElementById(id);

  if (selected) {
    selected.$ = new Pure(selected);
    (selected: HtmlElemPure);
  } else {
    selected = {
      $: new Pure(null)
    }
  }

  return selected;
};

export default pure;
