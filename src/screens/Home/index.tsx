import React from 'react';
import { SafeAreaView } from 'react-native';

import { HelloWorld } from '../../components';

import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorld />
    </SafeAreaView>
  );
};
