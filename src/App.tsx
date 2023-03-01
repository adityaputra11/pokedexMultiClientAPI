import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import Header from './components/organism/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {RootStackParamList} from './utils/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: (props: StackHeaderProps) => <Header {...props} />,
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
