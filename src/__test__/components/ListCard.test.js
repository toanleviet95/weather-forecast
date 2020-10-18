import React from 'react';
import renderer from 'react-test-renderer';
import ListCard from '@/components/ListCard';

describe('ListCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ListCard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
