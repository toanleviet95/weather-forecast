import React from 'react';
import renderer from 'react-test-renderer';
import Main from '@/containers/Main';

describe('Main', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Main />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
