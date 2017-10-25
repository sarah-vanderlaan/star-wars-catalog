import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import FriendsPanel from '../FriendsPanel';
import CharacterList from '../../common/CharacterList';

describe('FriendsPanel', () => {

  it('renders with no homeworld', () => {
    let props = {};

    let wrapper = shallow(<FriendsPanel {...props} />);
    expect(wrapper.find(".title").length).toEqual(1);
    expect(wrapper.find(".title").text()).toEqual("I don't have a planet :(");
  });

  it('renders with no friends', () => {
    let props = {
      homeworld: {
        name: "Test World",
        residents: {
          edges: []
        }
      }
    };

    let wrapper = shallow(<FriendsPanel {...props} />);
    expect(wrapper.find(".title").length).toEqual(1);
    expect(wrapper.find(".planet").length).toEqual(1);
    expect(wrapper.find(CharacterList).length).toEqual(1);
    expect(wrapper.find(CharacterList).props().characters).toEqual([]);
  });

  it('renders with friends', () => {
    let props = {
      homeworld: {
        name: "Test World",
        residents: {
          edges: [ {
            node: {
              name: "Friend"
            }
          }]
        }
      }
    };

    let wrapper = shallow(<FriendsPanel {...props} />);
    expect(wrapper.find(".title").length).toEqual(1);
    expect(wrapper.find(".planet").length).toEqual(1);
    expect(wrapper.find(CharacterList).length).toEqual(1);
  });

});
