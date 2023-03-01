import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type ListStyles = {
  container: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  renderItem: ViewStyle;
  renderTitle: ViewStyle;
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
  renderItem: {backgroundColor: '#ffcb3b'},
  renderTitle: {padding: 24, alignItems: 'center'},
});

export default styles;
