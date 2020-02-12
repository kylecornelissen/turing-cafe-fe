import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
  let wrapper
  let addReservation= jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<Form addReservation={addReservation} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state clearing form', () => {
    const wrapper = shallow(<Form addReservation={addReservation} />);

    wrapper.instance().state.name = 'kyle';
    expect(wrapper.instance().state.name).toEqual('kyle');

    wrapper.instance().clearForm();

    expect(wrapper.instance().state.name).toEqual('');
  });

  it('should update state on key press in input', () => {
    const wrapper = shallow(<Form addReservation={addReservation} />);
    const e = {target: {name: 'name', value: 'k'}}
    console.log(e.target.name, e.target.value);
    const mockEvent = jest.fn(e);

    expect(wrapper.instance().state.name).toEqual('');

    wrapper.find('.name-input').simulate('change', mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should run submitReservation when the button is clicked', () => {
    wrapper.instance().submitReservation = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().submitReservation).toHaveBeenCalledWith(mockEvent);
  });
});
