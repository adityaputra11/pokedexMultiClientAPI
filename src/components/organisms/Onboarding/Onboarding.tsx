import React from 'react';
import {View, Text, Button, Image} from '@atoms';
import {IMAGES} from '../../../utils/assetConfig';
import styles from './styles';
import {Header} from '@organisms';

type OnBoardingProps = {
  height: number;
  backgroundColor: string;
  handleButtonPress: () => void;
};

const OnBoarding = ({
  height,
  backgroundColor,
  handleButtonPress,
}: OnBoardingProps) => {
  return (
    <View
      style={[
        styles.container,
        {height: height, backgroundColor: backgroundColor},
      ]}>
      <Header />
      <Image
        testID="image-home"
        source={IMAGES.POKEMON_GROUP_IMAGE}
        resizeMode="contain"
        width={300}
        height={300}
        style={{marginLeft: 40}}
      />
      <Text weight="bold" style={styles.title}>
        Dapatkan semua informasi Pokémon dengan mudah di sini!
      </Text>
      <Text weight="light">Thousands of data compiled into one place</Text>

      <Button
        title="Check Pokédex"
        testID="home-button"
        onPress={handleButtonPress}
        style={styles.button}
      />
    </View>
  );
};

export default OnBoarding;
