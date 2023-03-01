import React, {FC, useCallback, useContext, useRef} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import {ThemeContext} from '../../../theme/ThemeProvider';
import {Card} from '@molecules';
import OnBoarding from '../Onboarding/Onboarding';
import styles from './styles';
import {PokemonResult} from '../../../utils/types';
import {Text} from '@atoms';

type PokemonListProps = {
  data: PokemonResult[];
};

type RenderItemProps = {
  item: PokemonResult;
  index: number;
};

const PokemonList: FC<any> = ({data}: PokemonListProps) => {
  const {theme} = useContext(ThemeContext);

  //reff
  const flatListRef = useRef<FlatList>(null);

  const handleButtonPress = useCallback(() => {
    flatListRef.current?.scrollToIndex({index: 0, animated: true});
  }, []);

  const renderTitle = (index: number) => {
    if (index === 0) {
      return (
        <View style={styles.renderTitle}>
          <Text size={36} weight="bold">
            PokèDex
          </Text>
          <Text size={20}>All Generation totaling 999999 Pokemon</Text>
        </View>
      );
    }
    return null;
  };

  const renderItem: ListRenderItem<PokemonResult> = useCallback(
    ({item, index}: RenderItemProps) => {
      return (
        <View style={[styles.renderItem]} key={item.url}>
          {renderTitle(index)}
          <Card label={item.name} index={index + 1} />
        </View>
      );
    },
    [],
  );

  const keyExtractor = useCallback(
    (item: PokemonResult) => String(item.url),
    [],
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      removeClippedSubviews={true}
      ListHeaderComponent={
        <OnBoarding
          height={theme.screenHeight}
          backgroundColor={theme.backgroundColor}
          handleButtonPress={handleButtonPress}
        />
      }
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default PokemonList;
