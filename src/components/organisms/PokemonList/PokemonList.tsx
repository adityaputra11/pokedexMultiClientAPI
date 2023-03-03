import React, {FC, useCallback, useContext, useRef, useState} from 'react';
import {FlatList, ListRenderItem, View as RNView} from 'react-native';

import {Text, View} from '@atoms';
import {Card, BottomSheetPokemon} from '@molecules';
import {ThemeContext} from '@theme';
import {BottomSheetHandle, PokemonData} from '../../../utils/types';
import OnBoarding from '../Onboarding/Onboarding';
import styles from './styles';

type PokemonListProps = {
  data: PokemonData[];
};

type RenderItemProps = {
  item: PokemonData;
  index: number;
};

const PokemonList: FC<any> = ({data}: PokemonListProps) => {
  const {theme} = useContext(ThemeContext);
  const [detail, setDetail] = useState<PokemonData | null>(null);

  //reff
  const flatListRef = useRef<FlatList>(null);

  const handleButtonPress = useCallback(() => {
    flatListRef.current?.scrollToIndex({index: 0, animated: true});
  }, []);

  const renderTitle = (index: number) => {
    if (index === 0) {
      return (
        <RNView style={styles.renderTitle}>
          <Text size={36} weight="bold">
            PokèDex
          </Text>
          <Text size={20}>All Generation totaling 999999 Pokemon</Text>
        </RNView>
      );
    }
    return null;
  };
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand(1);
  };

  const handlePressCard = (item: PokemonData) => {
    console.log('item', item);
    setDetail(item);
    handleOpen();
  };

  const renderItem: ListRenderItem<PokemonData> = useCallback(
    ({item, index}: RenderItemProps) => {
      return (
        <View style={[styles.renderItem]} key={index}>
          {renderTitle(index)}
          <Card
            onPress={() => handlePressCard(item)}
            label={item.name}
            index={item.id}
            imageSource={item.image}
            types={item.types.map(it => ({
              id: it.url,
              label: it.name,
              color: it.color,
            }))}
          />
        </View>
      );
    },
    [],
  );

  const keyExtractor = useCallback((item: PokemonData) => String(item.id), []);

  return (
    <>
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
      <BottomSheetPokemon
        bottomSheetRef={bottomSheetRef}
        detail={detail as PokemonData}
      />
    </>
  );
};

export default PokemonList;
