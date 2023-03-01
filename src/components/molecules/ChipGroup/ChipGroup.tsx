import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Chip from '../../atoms/Chip/Chip';

interface ChipGroupProps {
  data: Array<{id: number; label: string}>;
  onChipPress?: (id: number) => void;
  column?: number;
}

const ChipGroup = ({data, onChipPress, column}: ChipGroupProps) => {
  const renderItem = ({item}: {item: {id: number; label: string}}) => {
    const handlePress = () => {
      onChipPress && onChipPress(item.id);
    };

    return (
      <Chip
        testID={`chip-${item.id}`}
        label={item.label}
        onPress={handlePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={column ?? 2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});

export default ChipGroup;
