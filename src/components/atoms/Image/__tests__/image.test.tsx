jest.mock('./assets/image.png', () => 'image.png');
import React from 'react';
import {render} from '@testing-library/react-native';
import Image from '../Image';

describe('Image', () => {
  it('renders correctly with by using uri source props', () => {
    const {getByTestId} = render(
      <Image testID="image-from-uri" source={{uri: 'test-image'}} />,
    );
    const image = getByTestId('image-from-uri');
    expect(image.props.source).toStrictEqual({uri: 'test-image'});
  });

  it('renders correctly with by using local source props', () => {
    const {getByTestId} = render(
      <Image
        testID={'image-from-local'}
        source={require('./assets/image.png')}
      />,
    );
    const image = getByTestId('image-from-local');
    expect(image.props.source).toStrictEqual(require('./assets/image.png'));
  });
});
