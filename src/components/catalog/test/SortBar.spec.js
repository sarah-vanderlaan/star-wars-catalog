import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SortBar from '../SortBar';

describe('SortBar', () => {

  let defaultProps = {
    sortOrder: "name_ASC",
    onChange: sinon.spy()
  };

  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('marks checkbox selected for sort order from props', () => {
    let props = makeProps();

    let wrapper = shallow(<SortBar {...props} />);
    expect(wrapper.find(`#${props.sortOrder}`).props().checked).toEqual(true);
  });

  it('calls changeSortOrder on checkbox click', () => {
    let changeSortSpy = sinon.spy();
    let props = makeProps({ onChange: changeSortSpy });

    let wrapper = shallow(<SortBar {...props} />);
    let event = { target: { value: "birthYear_DESC" } };
    wrapper.find("#birthYear_DESC").simulate("change", event);
    expect(changeSortSpy.calledOnce).toEqual(true);
  });

});
