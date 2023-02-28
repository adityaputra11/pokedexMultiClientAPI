import {useQuery} from '@apollo/client';
import React from 'react';
import {View, Text} from 'react-native';
import {POKEMON_QUERY} from '../../utils/queries';

export default function HomeScreen() {
  const {loading, error, data} = useQuery(POKEMON_QUERY, {
    variables: {name: 'Pikachu'},
  });

  return (
    <View style={{flex: 1}}>
      <Text>Hello World</Text>
      <Text>{loading}</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(error)}</Text>
    </View>
  );
}
