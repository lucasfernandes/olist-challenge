import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: (metrics.smallPadding / 3) + metrics.statusBarHeight,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    color: colors.logo,
    fontSize: fonts.huge,
    marginBottom: metrics.baseMargin - 20,
    fontWeight: 'bold',
    fontFamily: 'Soleil',
  },

  sub: {
    color: colors.dark,
    fontSize: fonts.bigger,
    fontFamily: 'Soleil',
  },

  label: {
    marginTop: metrics.baseMargin,
    marginBottom: 5,
    fontSize: fonts.regular,
    color: colors.regular,
    fontFamily: 'Soleil',
  },

  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 11,
    borderRadius: metrics.baseRadius,
    fontSize: fonts.regular,
    fontFamily: 'Soleil',
    color: colors.regular,
  },

  buttonContainer: {
    marginTop: metrics.baseMargin,
    height: 52,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGreen,
  },

  buttonText: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Soleil',
  },
});

export default styles;
