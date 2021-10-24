import React from 'react';

import {
  decrement,
  increment,
  incrementAsync,
} from '../../redux/Counter/counter.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Container, Button, Text, Value, Row } from './styles';

export const Counter: React.FC = () => {
  const status = useAppSelector(state => state.counter.status);
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Row>
        <Button onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </Button>

        <Value>{value}</Value>

        <Button onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </Button>
      </Row>

      <Button
        style={{ marginTop: 20 }}
        onPress={() => dispatch(incrementAsync(1))}
        disabled={status === 'loading'}
      >
        <Text>{status === 'loading' ? 'Loading' : 'Increment Async'}</Text>
      </Button>
    </Container>
  );
};
