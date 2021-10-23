import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { githubMessage } from '../../redux/Counter/counter.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { styles } from './styles';

export const GithubMessage: React.FC = () => {
  const status = useAppSelector(state => state.counter.status);
  const message = useAppSelector(state => state.counter.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(githubMessage());
  }, [dispatch]);
  return (
    <View>
      <Text style={styles.text}>
        {status === 'loading' ? 'Loading' : message}
      </Text>
    </View>
  );
};
