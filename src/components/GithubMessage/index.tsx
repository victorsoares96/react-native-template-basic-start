import React, { useEffect } from 'react';

import { githubMessage } from '../../redux/Counter/counter.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Container, Text } from './styles';

export const GithubMessage: React.FC = () => {
  const status = useAppSelector(state => state.counter.status);
  const message = useAppSelector(state => state.counter.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(githubMessage());
  }, [dispatch]);
  return (
    <Container>
      <Text>{status === 'loading' ? 'Loading' : message}</Text>
    </Container>
  );
};
