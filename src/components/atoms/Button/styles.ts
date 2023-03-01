import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type ButtonStyles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles: ButtonStyles = StyleSheet.create<ButtonStyles>({
  container: {
    backgroundColor: '#E6AB07',
    padding: 12,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
