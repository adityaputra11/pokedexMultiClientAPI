import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styles from './styles';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  fsize?: 'bold' | 'medium' | 'light';
}

const Text = ({children, fsize, ...props}: TextProps) => {
  const getFontSize = () => {
    switch (fsize) {
      case 'bold':
        return 'Poppins-Bold';
      case 'medium':
        return 'Poppins-Medium';
      case 'light':
        return 'Poppins-Light';
      default:
        return 'Poppins-Medium';
    }
  };
  return (
    <RNText style={[styles.text, {fontFamily: getFontSize()}]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
