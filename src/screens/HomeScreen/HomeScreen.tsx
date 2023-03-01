import React, {ComponentType, FC} from 'react';
import {View} from 'react-native';
import PokemonList from '../../components/organism/PokemonList/PokemonList';
import withApiClient from '../../hoc/withApiClient';
import {fetchPokemon} from '../../redux/reducers/pokemon';
import {useAppDispatch} from '../../redux/store';
import {CLIENT} from '../../services/api';
import {ApiClient} from '../../utils/types';

interface HomeProps {
  apiClient: ApiClient;
}

const Home: FC<HomeProps> = ({apiClient}: HomeProps) => {
  const dispatch = useAppDispatch();
  dispatch(fetchPokemon({apiClient}));

  return (
    <View>
      <PokemonList />
    </View>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
