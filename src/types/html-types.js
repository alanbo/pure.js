// @flow
import Pure from '../Pure';

export interface PureAdded {
  $: Pure
}

export interface ArrayLikePure {
  $: Pure,
  length: number,
  [indexer: number]: any
}

export type HtmlElemListPure = HTMLElement & PureAdded | NodeList<HTMLElement> & PureAdded | null;
export type HtmlElemPure = HTMLElement & PureAdded;
export type HtmlCollectionPure = HTMLCollection<HTMLElement> & PureAdded | null;

export type HtmlAll = HtmlElemListPure | HtmlElemPure | HtmlCollectionPure;
