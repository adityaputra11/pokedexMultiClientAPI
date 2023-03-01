import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../../theme/ThemeProvider';
import {IMAGES} from '../../../utils/assetConfig';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';

const Header = p => {
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
