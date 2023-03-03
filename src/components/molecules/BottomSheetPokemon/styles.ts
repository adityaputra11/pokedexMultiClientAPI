import {ImageStyle, StyleSheet, ViewStyle, TextStyle} from 'react-native';

type BottomSheetPokemonStyles = {
  container: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
  button: ViewStyle;
  abilities: ViewStyle;
};

const styles = StyleSheet.create<BottomSheetPokemonStyles>({
  container: {
    padding: 36,
  },
  image: {
    marginTop: 30,
  },
  text: {
    marginTop: 20,
  },
  button: {width: 160, height: 50, alignSelf: 'center', marginTop: 30},
  abilities: {flexDirection: 'row', alignItems: 'baseline'},
});

export default styles;
