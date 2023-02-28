import React, {ComponentType, FC, useEffect} from 'react';
import {View} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import Image from '../../components/atoms/Image/Image';
import Text from '../../components/atoms/Text/Text';
import withApiClient from '../../hoc/withApiClient';
import {CLIENT} from '../../services/api';
import {IMAGES} from '../../utils/assetConfig';
import {ApiClient, PokemonResponse} from '../../utils/types';

interface HomeProps {
  apiClient: ApiClient;
}

const Home: FC<HomeProps> = ({apiClient}: HomeProps) => {
  useEffect(() => {
    const fetchPokemon = async () => {
      const result: PokemonResponse = await apiClient.get('/pokemon');
      console.log(result.results[0].name);
    };
    fetchPokemon();
  }, [apiClient]);

  return (
    <View style={{flex: 1, padding: 20}}>
      <Image
        testID="image-home"
        source={IMAGES.POKEMON_GROUP_IMAGE}
        resizeMode="contain"
        width={300}
        height={300}
      />
      <Text fsize="bold">
        All the Pokémon data you'll ever need in one place!
      </Text>
      <Text fsize="light">Thousands of data compiled into one place</Text>

      <Button
        title="Check Pokédex"
        testID="home-button"
        onPress={() => console.log('test')}
      />
    </View>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
