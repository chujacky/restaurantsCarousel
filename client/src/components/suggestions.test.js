import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Suggestions from './Suggestions.jsx';
import Carousel from './Carousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Suggestions Component', () => {
  test('renders Suggestion properly', () => {
    const wrapper = shallow(<Suggestions />);
    expect(wrapper).toHaveLength(1);
  });

  test('renders one Carousel component', () => {
    const wrapper = shallow(<Suggestions />);
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });
});
