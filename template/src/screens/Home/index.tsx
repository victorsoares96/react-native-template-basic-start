/* eslint-disable import/no-cycle */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { EScreens } from 'utils/enums/e-screens';

import { RootStackParamList } from '../../routes';
import { GithubMessage } from '../../components/GithubMessage';

import { HelloWorld, Counter } from '../../components';

import { Container, Text } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  EScreens.Home
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, EScreens.Home>;

type Props = {
  route?: HomeScreenRouteProp;
  navigation?: HomeScreenNavigationProp;
};

export const Home: React.FC<Props> = () => {
  return (
    <Container>
      <Text>Welcome to Home Screen!</Text>
      <GithubMessage />
      <HelloWorld />
      <Counter />
    </Container>
  );
};
