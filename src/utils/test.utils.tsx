import React, { ComponentType } from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function render(ui: any, { ...options } = {}) {
  // @ts-ignore
  const Wrapper: React.FC = ({ children }): ComponentType => <>{children}</>;
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
