import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {Text} from '@atoms';

interface ChipProps {
  label: string;
  onPress?: () => void;
  testID?: string;
  color?: string;
}

const Chip = ({label, onPress, testID, color}: ChipProps) => {
  return (
    <Pressable
      style={[styles.container, {backgroundColor: color}]}
      testID={testID}
      onPress={onPress}>
      <Text weight="bold" style={styles.label}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Chip;
