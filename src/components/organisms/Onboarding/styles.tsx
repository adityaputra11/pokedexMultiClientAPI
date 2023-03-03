import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type ListStyles = {
  container: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
};

const styles: ListStyles = StyleSheet.create<ListStyles>({
  container: {
    padding: 15,
  },
  button: {
    marginTop: 10,
    marginRight: 120,
  },
  title: {
    fontSize: 40,
  },
});

export default styles;
