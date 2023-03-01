import React from 'react';
import {View} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';

type MenuItemProps = {
  label: string;
};

const MenuItem = ({label}: MenuItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  );
};

export default MenuItem;
