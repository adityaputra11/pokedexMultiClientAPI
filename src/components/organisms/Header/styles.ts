import {StyleSheet, ViewStyle} from 'react-native';

type HeaderStyles = {
  container: ViewStyle;
  containerContent: ViewStyle;
};

const styles = StyleSheet.create<HeaderStyles>({
  container: {
    paddingBottom: 20,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerContent: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
