import React, {FC, useCallback, useContext, useRef} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import {ThemeContext} from '../../../theme/ThemeProvider';
import {Card} from '@molecules';
import OnBoarding from '../Onboarding/Onboarding';
import styles from './styles';
import {BottomSheetHandle, PokemonData} from '../../../utils/types';
import {BottomSheet, Text} from '@atoms';

type PokemonListProps = {
  data: PokemonData[];
};

type RenderItemProps = {
  item: PokemonData;
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
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand(1);
  };

  const handlePressCard = (name: string) => {
    handleOpen();
  };

  const renderItem: ListRenderItem<PokemonData> = useCallback(
    ({item, index}: RenderItemProps) => {
      return (
        <View style={[styles.renderItem]} key={index}>
          {renderTitle(index)}
          <Card
            onPress={() => handlePressCard(item.name)}
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
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[theme.screenHeight]}
        enablePanDownToClose>
        <Text>Hello WOrld</Text>
      </BottomSheet>
    </>
  );
};

export default PokemonList;
