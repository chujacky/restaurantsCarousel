import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Suggestions from './Suggestions.jsx';
import SuggestionList from './SuggestionList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Suggesion Component', () => {
  test('renders Suggestion properly', () => {
    const wrapper = shallow(<Suggestions />);
    expect(wrapper).toHaveLength(1);
  });

  test('renders one Suggestion List component', () => {
    const wrapper = shallow(<Suggestions />);
    expect(wrapper.find(SuggestionList)).toHaveLength(1);
  });
});
