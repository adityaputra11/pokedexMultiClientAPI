import {Text} from '@atoms';
import React, {ComponentType, FC, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/reducers/rootReducer';
import PokemonList from '../../components/organism/PokemonList/PokemonList';
import withApiClient from '../../hoc/withApiClient';
import {fetchPokemon} from '../../redux/reducers/pokemon';
import {useAppDispatch} from '../../redux/store';
import {CLIENT} from '../../services/api';
import {ApiClient, PokemonData} from '../../utils/types';
import styles from './styles';

interface HomeProps {
  apiClient: ApiClient;
}

const Home: FC<HomeProps> = ({apiClient}: HomeProps) => {
  const dispatch = useAppDispatch();
  const pokemon = useSelector<RootState, PokemonData[] | null | undefined>(
    state => state.pokemon.pokemon,
  );

  const isLoading = useSelector<RootState>(state => state.pokemon.isLoading);
  const error = useSelector<RootState>(state => state.pokemon.error);

  useEffect(() => {
    dispatch(fetchPokemon({apiClient}));
  }, [apiClient, dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Cannot Load Data </Text>;
  }

  return (
    <View style={styles.container}>
      <PokemonList data={pokemon} />
    </View>
  );
};
const HomeScreen = withApiClient(CLIENT)(Home as ComponentType<any>);
export default HomeScreen;
