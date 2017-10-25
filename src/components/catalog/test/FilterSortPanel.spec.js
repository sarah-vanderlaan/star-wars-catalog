import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FilterSortPanel from '../FilterSortPanel';
import SearchBar from '../SearchBar';
import SortBar from '../SortBar';

describe('FilterSortPanel', () => {

  let defaultProps = {
    searchTerm: "",
    onSearchChange: sinon.spy(),
    sortOrder: "name_ASC",
    onSortChange: sinon.spy()
  };

  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('renders search and sort sections', () => {
    let props = makeProps();

    let wrapper = shallow(<FilterSortPanel {...props} />);
    expect(wrapper.find(SearchBar).length).toEqual(1);
    expect(wrapper.find(SortBar).length).toEqual(1);
  });

});
