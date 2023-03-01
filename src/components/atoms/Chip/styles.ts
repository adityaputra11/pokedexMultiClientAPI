import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type ChipStyles = {
  container: ViewStyle;
  label: TextStyle;
};

const styles: ChipStyles = StyleSheet.create<ChipStyles>({
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

export default styles;
