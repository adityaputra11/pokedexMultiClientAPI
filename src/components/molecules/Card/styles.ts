import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type CardStyles = {
  container: ViewStyle;
  text: TextStyle;
  textNumber: TextStyle;
};

const styles = StyleSheet.create<CardStyles>({
  container: {
    padding: 35,
    marginHorizontal: 45,
    marginBottom: 25,
    borderRadius: 24,
    alignSelf: 'center',
  },
  textNumber: {
    fontSize: 14,
    marginTop: 10,
    color: '#B3B6B8',
  },
  text: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default styles;
