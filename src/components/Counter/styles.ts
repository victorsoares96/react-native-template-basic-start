import styled from 'styled-components/native';

import { Montserrat } from '../../assets/fonts';

export const Container = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.primary};
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.contrastText};
  text-align: center;
  font-family: ${Montserrat.SemiBold};
  font-size: 16px;
`;

export const Value = styled.Text`
  font-family: ${Montserrat.SemiBold};
  font-size: 24px;
  color: ${props => props.theme.text.primary};
`;
