import React, {FC, useContext, useRef} from 'react';
import {FlatList, View} from 'react-native';

import {ThemeContext} from '../../../theme/ThemeProvider';
import Text from '../../atoms/Text/Text';
import OnBoarding from '../Onboarding/Onboarding';
import styles from './styles';

const PokemonList: FC<any> = () => {
  const {theme} = useContext(ThemeContext);

  //reff
  const flatListRef = useRef<FlatList>(null);

  const handleButtonPress = () => {
    flatListRef.current?.scrollToIndex({index: 0, animated: true});
  };

  const renderItem = ({item}: {item: number}) => {
    return (
      <View style={[styles.renderItem, {height: theme.screenHeight}]}>
        <Text>Hello World : {item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={[1, 2, 3, 4, 5]}
      removeClippedSubviews={true}
      ListHeaderComponent={
        <OnBoarding
          height={theme.screenHeight}
          backgroundColor={theme.backgroundColor}
          handleButtonPress={handleButtonPress}
        />
      }
      renderItem={renderItem}
      keyExtractor={item => `${item}`}
    />
  );
};

export default PokemonList;
