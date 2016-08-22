import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import jasmineEnzyme from 'jasmine-enzyme';

import MyComponent from '../my-component.jsx';
import Foo from '../foo.jsx';

describe('<MyComponent />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo).length).toEqual(3);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star').length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique"/>
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique"/>)).toBeTruthy();
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick}/>
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });
});