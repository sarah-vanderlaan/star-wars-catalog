import * as types from '../actions/types';
import reducer from './filterReducer';
import expect from 'expect';

describe('Filter Reducer', () => {
  const getInitialState = () => {
    return {
      searchTerm: "",
      sortOrder: "name_ASC"
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'doesNotExist' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CHANGE_SEARCH_TERM', () => {
    const action = { type: types.CHANGE_SEARCH_TERM, searchTerm: "test" };
    const expected = Object.assign(getInitialState(), { searchTerm: "test" });

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

  it('should handle CHANGE_SORT', () => {
    const action = { type: types.CHANGE_SORT, sortOrder: "birthYear_ASC" };
    const expected = Object.assign(getInitialState(),
                                  { sortOrder: "birthYear_ASC" });

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

});
