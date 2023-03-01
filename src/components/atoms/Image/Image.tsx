import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type ImageProps = RNImageProps & {
  style?: StyleProp<ViewStyle>;
  width?: number | string;
  height?: number | string;
  testID?: string;
};

const Image = ({style, width, height, testID, ...rest}: ImageProps) => {
  return <RNImage testID={testID} style={[style, {width, height}]} {...rest} />;
};

export default Image;
