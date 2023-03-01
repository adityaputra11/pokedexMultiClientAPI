import React, {ComponentType, FC} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import PokemonList from '../../components/organism/PokemonList/PokemonList';
import withApiClient from '../../hoc/withApiClient';
import {fetchPokemon} from '../../redux/reducers/pokemon';
import {CLIENT} from '../../services/api';
import {ApiClient} from '../../utils/types';

interface HomeProps {
  apiClient: ApiClient;
}

const Home: FC<HomeProps> = ({apiClient}: HomeProps) => {
  const dispatch = useDispatch();
  dispatch(fetchPokemon({apiClient}));

  return (
    <View>
      <PokemonList />
    </View>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
