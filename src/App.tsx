import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from './redux/store';

import { Routes } from './routes/index';

import theme from './styles/themes/light';

export default () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
);
