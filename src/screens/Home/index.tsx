import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { HelloWorld } from '../../components';

import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <HelloWorld />
    </SafeAreaView>
  );
};
