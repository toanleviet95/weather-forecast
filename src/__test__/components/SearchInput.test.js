import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SearchInput from '@/components/SearchInput';

const wait = () => new Promise(resolve => setTimeout(resolve, 2000));

describe('SearchInput', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SearchInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show correct value when type', () => {
    const search = shallow(<SearchInput />);

    search.find('input').simulate('change', { target: { value: 'london' } });

    expect(search.find('input').props().value).toEqual('london');
  });

  it('should show dropdown when type correct location', () => {
    const search = mount(<SearchInput />);

    search.find('input').simulate('change', { target: { value: 'london' } });

    expect(search.find('input').props().value).toEqual('london');

    wait().then(() => {
      expect(search.find('.search-dropdown')).toHaveLength(1);
    });
  });
});
