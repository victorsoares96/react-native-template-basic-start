import styled from 'styled-components/native';

import { Montserrat } from '../../assets/fonts';

export const Container = styled.View``;

export const Text = styled.Text`
  font-family: ${Montserrat.Medium};
  color: ${props => props.theme.text.primary};
`;
