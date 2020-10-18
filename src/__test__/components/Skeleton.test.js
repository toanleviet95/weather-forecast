import React from 'react';
import renderer from 'react-test-renderer';
import Skeleton from '@/components/Skeleton';

describe('Skeleton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Skeleton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
