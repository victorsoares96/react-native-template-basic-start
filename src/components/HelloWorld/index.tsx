import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const HelloWorld: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};
