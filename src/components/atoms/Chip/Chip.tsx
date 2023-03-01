import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  label: {
    color: '#333',
    fontSize: 16,
  },
});

export default Chip;
