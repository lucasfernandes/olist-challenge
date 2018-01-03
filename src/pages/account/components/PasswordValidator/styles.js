import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  barsContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bar: {
    backgroundColor: colors.border,
    width: 105,
    height: 8,
    borderRadius: metrics.baseRadius,
  },

  red: {
    backgroundColor: colors.red,
  },

  orange: {
    backgroundColor: colors.orange,
  },

  green: {
    backgroundColor: colors.green,
  },

  messagesContainer: {
    paddingTop: 8,
  },

  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  bullet: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: colors.border,
  },

  message: {
    marginLeft: 8,
    fontSize: fonts.regular,
    color: colors.regular,
    fontFamily: 'Soleil',
  },
});

export default styles;
