import {ViewStyle, StyleSheet} from 'react-native';

type MenuItemStyles = {
  contentContainer: ViewStyle;
};

const styles = StyleSheet.create<MenuItemStyles>({
  contentContainer: {
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
});

export default styles;
