import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS} from './../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    width: width * 0.046,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.045,
  },
  toggle: {
    height: height * 0.03,
    width: width * 0.08,
    marginHorizontal: width * 0.04,
    resizeMode: 'cover',
    tintColor: COLORS.black,
  },

  icon_set: {
    width: width * 0.055,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: COLORS.gray60,
    marginTop: height * 0.01,
  },

  tablebal: {
    ...FONTS.sixHundred,
    fontSize: width * 0.028,
    color: COLORS.white,
    marginBottom: -3,
  },
  headerstyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  bell: {
    width: width * 0.06,
    height: height * 0.048,
    resizeMode: 'contain',
    marginRight: width * 0.045,
  },
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: width * 0.05,
  },
  count: {
    fontSize: 9,
    ...FONTS.sixHundred,
    color: COLORS.white,
    borderRadius: 20,
    marginBottom: -1,
  },
  countbox: {
    backgroundColor: COLORS.primary,
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: 1,
    right: 11,
  },
  tableBarstyle: {
    height: height * 0.064,
  },
});
