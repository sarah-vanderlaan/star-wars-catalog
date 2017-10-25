import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CharacterList from '../CharacterList';
import Error from '../Error';
import Character from '../Character';
import { RiseLoader } from 'halogen';

describe('CharacterList', () => {

  let defaultProps = {
    characters: [
      { id: "123", name: "Test" },
      { id: "456", name: "Test2" }
    ],
    loading: false
  };

  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('renders error component if error getting data', () => {
    let props = makeProps({ error: { message: "Error!" } });

    let wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper.find(Error).length).toEqual(1);
    expect(wrapper.find(Character).length).toEqual(0);
  });

  it('shows message if no results match filter', () => {
    let props = makeProps({ characters: [] });

    let wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper.find(".noResults").length).toEqual(1);
    expect(wrapper.find(Error).length).toEqual(0);
    expect(wrapper.find(Character).length).toEqual(0);
  });

  it('renders all characters present in data', () => {
    let props = makeProps();

    let wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper.find(".noResults").length).toEqual(0);
    expect(wrapper.find(Error).length).toEqual(0);
    expect(wrapper.find(Character).length).toEqual(2);
  });

  it('renders loading dots if loading data', () => {
    let props = makeProps({ loading: true });

    let wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper.find(RiseLoader).length).toEqual(1);
    expect(wrapper.find(Error).length).toEqual(0);
    expect(wrapper.find(Character).length).toEqual(0);
  });

});
