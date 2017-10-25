import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { UnwrappedProfilePage } from '../ProfilePage';
import { PulseLoader } from 'halogen';
import BasicInfo from '../BasicInfo';
import FriendsPanel from '../FriendsPanel';
import Error from '../../common/Error';
import { Link } from 'react-router-dom';

describe('ProfilePage', () => {

  it('shows PulseLoader when loading', () => {
    let props = {
      character: {},
      loading: true
    };

    let wrapper = shallow(<UnwrappedProfilePage {...props} />);
    expect(wrapper.find(PulseLoader).length).toEqual(1);
    expect(wrapper.find(BasicInfo).length).toEqual(0);
    expect(wrapper.find(FriendsPanel).length).toEqual(0);
  });

  it('does not show PulseLoader when not loading', () => {
    let props = {
      character: { id: "123", name: "Test" },
      loading: false
    };

    let wrapper = shallow(<UnwrappedProfilePage {...props} />);
    expect(wrapper.find(PulseLoader).length).toEqual(0);
    expect(wrapper.find(BasicInfo).length).toEqual(1);
    expect(wrapper.find(FriendsPanel).length).toEqual(1);
  });

  it('shows error component if there is an error', () => {
    let props = {
      character: {},
      error: {
        message: "There was an error"
      },
      loading: false
    };

    let wrapper = shallow(<UnwrappedProfilePage {...props} />);
    expect(wrapper.find(Error).length).toEqual(1);
    expect(wrapper.find(PulseLoader).length).toEqual(0);
    expect(wrapper.find(BasicInfo).length).toEqual(0);
    expect(wrapper.find(FriendsPanel).length).toEqual(0);
  });

  it('contains link to catalog', () => {
    let props = {
      character: { id: "123", name: "Test" },
      loading: false
    };

    let wrapper = shallow(<UnwrappedProfilePage {...props} />);
    expect(wrapper.find(Link).props().to).toEqual("/");
  });

});
