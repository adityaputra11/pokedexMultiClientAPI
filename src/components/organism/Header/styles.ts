import {StyleSheet, ViewStyle} from 'react-native';

type HeaderStyles = {
  container: ViewStyle;
};

const styles = StyleSheet.create<HeaderStyles>({
  container: {
    paddingVertical: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
