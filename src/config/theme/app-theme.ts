import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#8d8c8c',
  orange: '#37cc0a',
  redLight: '#ff51b1',

  textPrimary: '#37cc0a',
  textSecondary: '#ff51b1',
  textBlack: '#000000',
  background: '#000000',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 80,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  containerScreen: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  containerRows: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign : 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: colors.textPrimary,
  },
});
