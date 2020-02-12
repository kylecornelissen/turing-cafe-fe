import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
  let wrapper
  let addReservation= jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addReservation={addReservation} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
