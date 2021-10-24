import React, { ComponentType, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { render as rtlRender } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';

import theme from '../styles/themes/light';

import { appReducer } from '../redux/store';

function render(ui: any, { ...options } = { initialState: {} }) {
  const { initialState } = options;

  const store = configureStore({
    reducer: appReducer,
    preloadedState: { ...initialState },
  });

  // @ts-ignore
  const Wrapper: React.FC = ({ children }): ComponentType => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export { render };

const Stack = createStackNavigator();

export const renderWithNavigation = ({
  screens = {},
  navigatorConfig = {},
} = {}) =>
  render(
    <NavigationContainer>
      <Stack.Navigator {...navigatorConfig}>
        {Object.keys(screens).map(name => (
          // @ts-ignore
          <Stack.Screen key={name} name={name} component={screens[name]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>,
  );

export function RenderWithRedux(component: ReactNode, options: any = {}) {
  const { initialState } = options;

  const store = configureStore({
    reducer: appReducer,
    preloadedState: { ...initialState },
  });

  return <Provider store={store}>{component}</Provider>;
}
