import {StyleSheet, TextStyle} from 'react-native';

type TextStyles = {
  text: TextStyle;
};

const styles = StyleSheet.create<TextStyles>({
  text: {
    fontSize: 16,
  },
});

export default styles;
