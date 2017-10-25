import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {

  let defaultProps = {
    searchTerm: "",
    onChange: sinon.spy()
  };

  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('calls changeSearchTerm on input change', () => {
    let changeSearchSpy = sinon.spy();
    let props = makeProps({ onChange: changeSearchSpy });

    let wrapper = shallow(<SearchBar {...props} />);
    let event = { target: { value: "S" } };
    wrapper.find("input").simulate("change", event);
    expect(changeSearchSpy.calledOnce).toEqual(true);
  });

});
