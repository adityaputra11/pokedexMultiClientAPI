import React from 'react';
import {Pressable, Text, ViewStyle} from 'react-native';
import styles from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  testID?: string;
}

const Button = ({onPress, title, disabled, style, testID}: ButtonProps) => {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
