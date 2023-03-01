import {render} from '@testing-library/react-native';
import React from 'react';
import Image, {ImageProps} from '../Image';
import '@testing-library/jest-native/extend-expect';

const props: ImageProps = {
  source: {
    uri: 'https://example.com/image.jpg',
  },
  style: {
    borderRadius: 8,
  },
  width: 100,
  height: 100,
  testID: 'image',
};

describe('Image', () => {
  test('renders an image with correct styles', () => {
    const {getByTestId} = render(<Image {...props} testID="image" />);
    const image = getByTestId('image');
    console.log('image', image.props);
    expect(image).toHaveStyle({width: 100});
    expect(image).toHaveStyle({height: 100});
  });
});
