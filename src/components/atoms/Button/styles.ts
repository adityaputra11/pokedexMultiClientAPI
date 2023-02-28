import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface ButtonStyles {
  container: ViewStyle;
  text: TextStyle;
}

const styles: ButtonStyles = StyleSheet.create<ButtonStyles>({
  container: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
