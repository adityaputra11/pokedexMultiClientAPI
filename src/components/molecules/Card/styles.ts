import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type CardStyles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<CardStyles>({
  container: {
    padding: 35,
    marginHorizontal: 45,
    marginBottom: 25,
    borderRadius: 24,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default styles;
