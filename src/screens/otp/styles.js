import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  skip: {
    color: COLORS.gray60,
    ...FONTS.sixHundred,
    fontSize: 13,
    alignSelf: 'flex-end',
    marginTop: height * 0.03,
  },
  box3: {
    alignItems: 'center',
    flexDirection: 'row',
    // alignSelf: 'center',
    marginBottom: height * 0.1,
  },
  resend: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.gray60,
    marginLeft: width * 0.05,
  },
  time: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.gray60,
    color: COLORS.primary,
    width: width * 0.18,
    marginLeft: width * 0.02,
  },

  otpCheck: {
    width: width * 0.6,
    height: height * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: 12,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    backgroundColor: COLORS.gray,
    fontSize: 20,
    paddingBottom: width * 0.015,
    borderWidth: 0,
    paddingBottom: -0.1,
  },
  resent: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    fontSize: 14,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    textAlign: 'center',
  },
  login: {
    width: width * 0.9,
    height: height * 0.36,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.04,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.046,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  subheading: {
    color: COLORS.gray60,
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
  },
  btn: {
    marginBottom: height * 0.08,
    alignSelf: 'center',
  },
});
