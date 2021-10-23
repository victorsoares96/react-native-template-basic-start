import { StyleSheet } from 'react-native';

import { Montserrat } from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: Montserrat.Regular,
    fontSize: 24,
    color: '#707070',
    textAlign: 'center',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#4c12a1',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Montserrat.SemiBold,
    fontSize: 16,
  },
  value: {
    fontFamily: Montserrat.SemiBold,
    fontSize: 24,
  },
});
