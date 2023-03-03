import {Chip} from '@atoms';
import React from 'react';
import {FlatList, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {View} from '@atoms';

export type ChipDataProps = {
  id: string;
  label: string;
  color: string;
};

type ChipGroupProps = {
  data: ChipDataProps[];
  onChipPress?: (id: string) => void;
  column?: number;
  style?: StyleProp<ViewStyle>;
};

const ChipGroup = ({data, onChipPress, column, style}: ChipGroupProps) => {
  const renderItem = ({item}: {item: ChipDataProps}) => {
    const handlePress = () => {
      onChipPress && onChipPress(item.id);
    };

    return (
      <Chip
        testID={`chip-${item.id}`}
        label={item.label}
        onPress={handlePress}
        color={item.color}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
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
  container: {},
});

export default ChipGroup;
