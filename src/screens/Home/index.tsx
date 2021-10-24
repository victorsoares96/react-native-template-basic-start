/* eslint-disable import/no-cycle */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { EScreens } from 'utils/enums/e-screens';

import { RootStackParamList } from '../../routes';
import { GithubMessage } from '../../components/GithubMessage';

import { HelloWorld } from '../../components';

import { styles } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  EScreens.Home
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, EScreens.Home>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export const Home: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <GithubMessage />
      <HelloWorld />
    </SafeAreaView>
  );
};
