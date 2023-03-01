import React, {ComponentType, FC, useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import Image from '../../components/atoms/Image/Image';
import Text from '../../components/atoms/Text/Text';
import withApiClient from '../../hoc/withApiClient';
import {CLIENT} from '../../services/api';
import {ThemeContext} from '../../theme/ThemeProvider';
import {IMAGES} from '../../utils/assetConfig';
import {ApiClient, PokemonResponse} from '../../utils/types';

interface HomeProps {
  apiClient: ApiClient;
}

const Home: FC<HomeProps> = ({apiClient}: HomeProps) => {
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    const fetchPokemon = async () => {
      const result: PokemonResponse = await apiClient.get('/pokemon');
      console.log(result.results[0].name);
    };
    fetchPokemon();
  }, [apiClient]);

  return (
    <ScrollView
      style={{flex: 1, padding: 20, backgroundColor: theme.backgroundColor}}>
      <Image
        testID="image-home"
        source={IMAGES.POKEMON_GROUP_IMAGE}
        resizeMode="contain"
        width={300}
        height={300}
        style={{marginLeft: 60}}
      />
      <Text weight="bold" style={{fontSize: 40}}>
        Dapatkan semua informasi Pokémon dengan mudah di sini!
      </Text>
      <Text weight="light">Thousands of data compiled into one place</Text>

      <Button
        title="Check Pokédex"
        testID="home-button"
        onPress={() => console.log('test')}
      />
    </ScrollView>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
