import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BasicInfo from '../BasicInfo';

describe('BasicInfo', () => {

  let defaultProps = {
    person: {
      name: "Test",
      birthYear: "1234",
      gender: "MALE",
      height: 100,
      mass: 100
    }
  };

  it('renders all fields', () => {
    let wrapper = shallow(<BasicInfo {...defaultProps}/>);
    let expectedFields = [
      "name",
      "birthYear",
      "gender",
      "height",
      "mass"
    ];
    expectedFields.forEach(field => {
      expect(wrapper.find(`#${field}`).length).toEqual(1);
    });
  });

  it('renders unknown if no value for field', () => {
    let props = {
      person: { name: "Test" }
    };
    let wrapper = shallow(<BasicInfo {...props}/>);

    wrapper.find(".property").forEach(prop => {
      expect(prop.text()).toEqual("Unknown");
    });
  });

  it('add units for height', () => {
    let wrapper = shallow(<BasicInfo {...defaultProps}/>);
    expect(wrapper.find("#height span").text()).toEqual("100cm");
  });

  it('add units for mass', () => {
    let wrapper = shallow(<BasicInfo {...defaultProps}/>);
    expect(wrapper.find("#mass span").text()).toEqual("100kg");
  });

  it('does not add units for birth year', () => {
    let wrapper = shallow(<BasicInfo {...defaultProps}/>);
    expect(wrapper.find("#birthYear span").text()).toEqual("1234");
  });

});
