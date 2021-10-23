import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  decrement,
  increment,
  incrementAsync,
} from '../../redux/Counter/counter.slice';
// import {  } from '../../redux/Counter/counter.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { styles } from './styles';

export const HelloWorld: React.FC = () => {
  const status = useAppSelector(state => state.counter.status);
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
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
