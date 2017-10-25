import * as types from '../actions/types';

const initialState = {
  searchTerm: "",
  sortOrder: "name_ASC"
};

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case types.CHANGE_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case types.CHANGE_SORT:
      return Object.assign({}, state, { sortOrder: action.sortOrder });
    default:
      return state;
  }
}
