import {Image, Text} from '@atoms';
import {ThemeContext} from '@theme';
import React, {useContext} from 'react';
import {Pressable} from 'react-native';
import ChipGroup, {ChipDataProps} from '../ChipGroup/ChipGroup';
import styles from './styles';

type CardProps = {
  label: string;
  index?: number;
  imageSource: string;
  types: ChipDataProps[];
  onPress?: () => void;
};

const Card = ({label, index, imageSource, types, onPress}: CardProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Image
        source={{uri: imageSource}}
        width={200}
        height={200}
        resizeMode="contain"
        style={{backgroundColor: types[0].color}}
      />
      <Text weight="bold" style={styles.textNumber}>
        #{`${index}`.padStart(3, '0')}
      </Text>
      <Text weight="bold" style={styles.text}>
        {label}
      </Text>
      <ChipGroup data={types} column={3} />
    </Pressable>
  );
};

export default Card;
