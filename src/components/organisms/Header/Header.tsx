import React, {useState} from 'react';
import {useContext} from 'react';
import {Pressable} from 'react-native';
import {ThemeContext} from '../../../theme/ThemeProvider';
import {IMAGES} from '../../../utils/assetConfig';
import styles from './styles';
import Modal from 'react-native-modal';
import {Text, Image, View} from '@atoms';
import {hasNotch} from 'react-native-device-info';

// type HeadetProps = {
//   onPress: () => void;
// };

const Header = () => {
  const {theme} = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={[styles.container, {paddingTop: hasNotch() ? 30 : 0}]}>
      <Image
        testID="image-header"
        source={IMAGES.POKEMON_ICON}
        width={70}
        height={20}
        resizeMode="contain"
      />
      <Pressable onPress={toggleVisible}>
        <Image
          testID="image-header"
          source={IMAGES.MENU_BARS}
          width={70}
          height={20}
          resizeMode="contain"
        />
      </Pressable>
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleVisible}
        onBackButtonPress={toggleVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        style={{margin: 0, justifyContent: 'flex-start'}}>
        <View
          style={[
            styles.containerContent,
            {
              width: theme.screenWidth,
            },
          ]}>
          <View style={[styles.container]}>
            <Image
              testID="image-header"
              source={IMAGES.POKEMON_ICON}
              width={70}
              height={20}
              resizeMode="contain"
            />
            <Pressable onPress={toggleVisible}>
              <Image
                testID="image-header"
                source={IMAGES.MENU_BARS}
                width={70}
                height={20}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View>
            <Text>Home</Text>
          </View>
          <Text>Pokemon Type</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Header;
