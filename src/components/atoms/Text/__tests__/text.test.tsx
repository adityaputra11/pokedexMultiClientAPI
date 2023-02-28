import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../Text';

test('renders correctly', () => {
  const tree = renderer.create(<Text>Test Text</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
