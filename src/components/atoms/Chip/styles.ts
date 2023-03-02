import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type ChipStyles = {
  container: ViewStyle;
  label: TextStyle;
};

const styles: ChipStyles = StyleSheet.create<ChipStyles>({
  container: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 14,
    margin: 4,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
