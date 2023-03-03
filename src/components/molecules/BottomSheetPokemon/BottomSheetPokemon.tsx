import React from 'react';
import {BottomSheet, Button, Image, Text, View} from '@atoms';
import {BottomSheetRef} from 'components/atoms/BottomSheet/BottomSheet';
import styles from './styles';
import {PokemonData} from 'utils/types';
import ChipGroup from '../ChipGroup/ChipGroup';
import {useNavigation} from '@react-navigation/native';

type BottomSheetPokemonProps = {
  bottomSheetRef: React.Ref<BottomSheetRef> | null;
  detail: PokemonData;
};

const BottomSheetPokemon = ({
  bottomSheetRef,
  detail,
}: BottomSheetPokemonProps) => {
  const navigation = useNavigation();
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['100%']}
      enablePanDownToClose>
      <View style={[styles.container]}>
        <Text weight="bold" size={36}>
          {detail?.name}
        </Text>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: detail?.image}}
            width={250}
            height={250}
            onError={() => {}}
            style={[styles.image, {backgroundColor: detail?.types[0].color}]}
          />
        </View>
        <Text weight="bold" style={[styles.text]}>
          Weight : <Text>{detail?.weight}</Text>
        </Text>
        <Text weight="bold" style={styles.text}>
          Height : <Text>{detail?.height}</Text>
        </Text>
        <View style={styles.abilities}>
          <Text weight="bold" style={styles.text}>
            Abilities :
          </Text>
          <View>
            {detail?.abilities?.map(item => (
              <Text key={item.slot}>
                {` \u2022 ${item.ability.name}`}{' '}
                {item.is_hidden ? '(Hidden)' : ''}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.abilities}>
          <Text weight="bold" style={styles.text}>
            Type :
          </Text>
          <ChipGroup
            column={2}
            style={{marginStart: 25}}
            data={detail?.types.map(it => ({
              id: it.url,
              label: it.name,
              color: it.color,
            }))}
          />
        </View>
        <Button
          title="More Detail"
          onPress={() => navigation.navigate('PokemonDetail')}
          style={styles.button}
        />
      </View>
    </BottomSheet>
  );
};

export default BottomSheetPokemon;
