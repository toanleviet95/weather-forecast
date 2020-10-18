import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from '@/components/Card';

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should show correct date', () => {
    const card = shallow(<Card
      isToday={false}
      date='2020-10-18'
      loading={false}
      location=''
      low={0}
      high={0}
      temp={0}
      state=''
    />);
  
    expect(card.find('.forecast-header > .date').text()).toEqual('18 Oct');
  });
  
  it('should show correct today', () => {
    const card = shallow(<Card
      isToday
      date='2020-10-18'
      loading={false}
      location=''
      low={0}
      high={0}
      temp={0}
      state=''
    />);
  
    expect(card.find('.forecast-header > .day').text()).toEqual('Sunday (Today)');
  });
});
