import {Image, Text} from '@atoms';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '@theme';
import styles from './styles';
import {IMAGES} from '../../../utils/assetConfig';

type CardProps = {
  label: string;
  index?: number;
};

const Card = ({label, index}: CardProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Image
        source={IMAGES.POKEMON_GROUP_IMAGE}
        width={200}
        height={200}
        resizeMode="contain"
        style={{backgroundColor: 'red'}}
      />
      <Text weight="medium" style={styles.text}>
        #{`${index}`.padStart(3, '0')}
      </Text>
      <Text weight="bold" style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

export default Card;
