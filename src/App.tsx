import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { Routes } from './routes/index';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
