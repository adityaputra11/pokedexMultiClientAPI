import React, {ComponentType, FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import withApiClient from '../../hoc/withApiClient';
import {CLIENT} from '../../services/api';
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
    <View style={{flex: 1}}>
      <Text>Hello World</Text>
    </View>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
