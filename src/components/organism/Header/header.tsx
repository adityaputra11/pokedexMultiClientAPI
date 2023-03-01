import React from 'react';
import {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../../theme/ThemeProvider';
import {IMAGES} from '../../../utils/assetConfig';
import Image from '../../atoms/Image/Image';

const Header = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: theme.backgroundColor, padding: 10}}>
      <Image
        testID="image-header"
        source={IMAGES.POKEMON_ICON}
        width={70}
        height={20}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
