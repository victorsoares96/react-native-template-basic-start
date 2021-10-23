import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { EScreens } from '../utils/enums/e-screens';

import { Home } from '../screens';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={EScreens.Home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={EScreens.Home} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
