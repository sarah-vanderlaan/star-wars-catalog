import * as types from './types';

export function changeSearchTerm(newSearchTerm) {
  return { type: types.CHANGE_SEARCH_TERM, searchTerm: newSearchTerm };
}

export function changeSortOrder(newSortOrder) {
  return { type: types.CHANGE_SORT, sortOrder: newSortOrder };
}
