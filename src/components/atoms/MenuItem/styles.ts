import {ViewStyle, StyleSheet} from 'react-native';

type MenuItemStyles = {
  container: ViewStyle;
  contentContainer: ViewStyle;
};

const styles = StyleSheet.create<MenuItemStyles>({
  container: {},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
