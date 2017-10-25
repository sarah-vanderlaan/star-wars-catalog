import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { UnwrappedCatalogPage } from '../CatalogPage';
import FilterSortPanel from '../FilterSortPanel';
import CharacterList from '../../common/CharacterList';

describe('CatalogPage', () => {

  let defaultProps = {
    characters: [
      { id: "123", name: "Test" },
      { id: "456", name: "Test2" }
    ],
    loading: false,
    searchTerm: "",
    changeSearchTerm: sinon.spy(),
    sortOrder: "name_ASC",
    changeSortOrder: sinon.spy()
  };

  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('renders even with error', () => {
    let error = {
      message: "There was an error"
    };
    let props = makeProps({ error });

    let wrapper = shallow(<UnwrappedCatalogPage {...props} />);
    expect(wrapper.find(CharacterList).length).toEqual(1);
    expect(wrapper.find(FilterSortPanel).length).toEqual(1);
  });

  it('toggles filter on icon click', () => {
    let props = makeProps();

    let wrapper = shallow(<UnwrappedCatalogPage {...props} />);
    expect(wrapper.find(FilterSortPanel).length).toEqual(1);
    let event = { preventDefault: sinon.spy() };
    wrapper.find(".toggle").simulate("click", event);
    expect(wrapper.find(FilterSortPanel).length).toEqual(0);
  });

  it('renders with no characters', () => {
    let characters = [];
    let props = makeProps({ characters });

    let wrapper = shallow(<UnwrappedCatalogPage {...props} />);
    expect(wrapper.find(CharacterList).length).toEqual(1);
    expect(wrapper.find(CharacterList).props().characters.length).toEqual(0);
  });

  it('renders with characters', () => {
    let props = makeProps();

    let wrapper = shallow(<UnwrappedCatalogPage {...props} />);
    expect(wrapper.find(CharacterList).length).toEqual(1);
    expect(wrapper.find(CharacterList).props().characters.length).toEqual(2);
  });
});
