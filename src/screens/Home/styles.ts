import styled from 'styled-components/native';

import { Montserrat } from '../../assets/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.background};
`;

export const Text = styled.Text`
  font-family: ${Montserrat.Regular};
  color: ${props => props.theme.text.primary};
`;
