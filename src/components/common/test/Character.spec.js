import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Character from '../Character';
import { Link } from 'react-router-dom';

describe('Character', () => {

  it('contains link to character\'s page', () => {
    let props = { id: "123", name: "Test" };

    let wrapper = shallow(<Character {...props} />);
    expect(wrapper.find(Link).props().to).toEqual("/character/123");
  });

});
