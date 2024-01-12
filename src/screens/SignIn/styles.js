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
  login: {
    width: width * 0.9,
    height: height * 0.45,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  heading: {
    color: COLORS.black,
    fontSize: width * 0.044,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  subheading: {
    color: COLORS.gray50,
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  btn: {
    marginBottom: height * 0.04,
    marginTop: height * 0.04,
    alignSelf: 'center',
    width: width * 0.4,
  },
});
