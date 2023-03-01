import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface ChipProps {
  label: string;
  onPress?: () => void;
  testID: string;
}

const Chip = ({label, onPress, testID}: ChipProps) => {
  return (
    <Pressable style={styles.container} testID={testID} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Chip;
