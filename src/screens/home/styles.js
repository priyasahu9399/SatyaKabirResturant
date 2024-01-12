import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  addrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveradd: {
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginBottom: -4,
  },
  addresssubtext: {
    fontSize: width * 0.03,
    ...FONTS.fourHundred,
    color: COLORS.gray60,
    marginBottom: -4,
  },
  darrow: {
    width: width * 0.038,
    height: height * 0.018,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginBottom: -3,
    marginLeft: width * 0.01,
  },
  // heading---------
  headrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.03,
    marginTop: height * 0.02,
    marginBottom: height * 0.007,
  },
  rightText: {
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    color: '#363795',
    marginBottom: -2,
  },
  leftText: {
    fontSize: 16.5,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },
  listbox: {
    elevation: 4,
    backgroundColor: COLORS.white,
    paddingVertical: height * 0.008,
    paddingHorizontal: height * 0.012,
    borderRadius: 60,
    marginBottom: height * 0.02,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 2,
  },
  listboxtext: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    marginBottom: -3,
  },
  listImagebox: {
    width: width * 0.15,
    height: height * 0.05,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: width * 0.02,
  },
  listactive: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 8, height: 6},
    shadowOpacity: 6,
    shadowRadius: 10,
    elevation: 8,
  },
  listImage: {
    width: width * 0.13,
    height: height * 0.04,
    resizeMode: 'contain',
  },

  rarrow: {
    width: width * 0.03,
    height: width * 0.03,
    tintColor: COLORS.primary,
    resizeMode: 'contain',
    marginLeft: 3,
  },
  
});
