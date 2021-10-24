import styled from 'styled-components/native';

import { Montserrat } from '../../assets/fonts';

export const Container = styled.View``;

export const Text = styled.Text`
  font-family: ${Montserrat.Regular};
  font-size: 24px;
  color: ${props => props.theme.text.secondary};
  text-align: center;
`;
