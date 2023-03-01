import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ChipProps {
  label: string;
  onPress?: () => void;
}

const Chip = ({label, onPress}: ChipProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
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
