/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailFood from './screen/DetailFood';
import HomeScreen from './screen/HomeScreen';
import {
  LogBox,
} from 'react-native';


const Stack = createStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App: () => React$Node = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Recetario',
        }} 
        />
        <Stack.Screen name="DetailFood" 
          options={{
            headerShown: false,
          }} 
        component={DetailFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;