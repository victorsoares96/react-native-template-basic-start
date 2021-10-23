import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  decrement,
  increment,
  incrementAsync,
  githubMessage,
} from '../../redux/Counter/counter.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { styles } from './styles';

export const HelloWorld: React.FC = () => {
  const status = useAppSelector(state => state.counter.status);
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(githubMessage());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.value}>{value}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => dispatch(incrementAsync(1))}
        disabled={status === 'loading'}
      >
        <Text style={styles.textButton}>
          {status === 'loading' ? 'Loading' : 'Increment Async'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
