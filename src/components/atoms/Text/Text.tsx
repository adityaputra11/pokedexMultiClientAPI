import React, {useContext} from 'react';
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {ThemeContext} from '../../../theme/ThemeProvider';
import styles from './styles';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  weight?: 'bold' | 'medium' | 'light';
  style?: StyleProp<TextStyle>;
}

const Text = ({children, weight, style, ...props}: TextProps) => {
  const {theme} = useContext(ThemeContext);
  const getFontSize = () => {
    switch (weight) {
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
    <RNText
      style={[
        styles.text,
        {fontFamily: getFontSize(), color: theme.textColor},
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
