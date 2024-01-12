import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.94,
    alignSelf: 'center',
  },

  cartBGimg: {
    width: width * 0.94,
    height: height * 0.25,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cartheartbox: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 40,
    backgroundColor: '#FFFFFF33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.012,
    alignSelf: 'flex-end',
    marginRight: width * 0.04,
  },
  cartheart: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  title: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.05,
    marginTop: height * 0.01,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartrate: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    marginHorizontal: width * 0.02,
  },
  cartstar: {
    width: width * 0.05,
    height: width * 0.045,
    resizeMode: 'contain',
    shadowColor: COLORS.primary,
    shadowOffset: {width: 8, height: 4},
    shadowOpacity: 4,
    shadowRadius: 10,
    marginLeft: -2,
  },
  cartreview: {
    color: COLORS.gray60,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  seereview: {
    color: COLORS.primary,
    fontSize: width * 0.033,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    marginLeft: width * 0.04,
    textDecorationLine: 'underline',
  },

  cartrupe: {
    fontSize: width * 0.047,
    color: COLORS.primary,
    ...FONTS.sixHundred,
  },
  rupee: {
    fontSize: width * 0.042,
    ...FONTS.fiveHundred,
    color: COLORS.primary,
    marginBottom: -height * 0.008,
  },
  subtitle: {
    color: COLORS.gray50,
    ...FONTS.fourHundred,
    fontSize: width * 0.033,
    lineHeight: height * 0.029,
    marginVertical: height * 0.008,
  },
  heading: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.038,
    marginTop: height * 0.015,
  },

  minusplusiconbox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: width * 0.07,
    height: width * 0.069,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusplus: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.037,
    marginBottom: -4,
    width: width * 0.08,
    textAlign: 'center',
  },
  activeincre: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    elevation: 8,
    shadowOffset: {width: 8, height: 4},
    shadowOpacity: 4,
    shadowRadius: 10,
  },
  increrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },

  // ----------list---------------
  radioBox: {
    height: width * 0.055,
    width: width * 0.055,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: COLORS.gray30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: width * 0.034,
    width: width * 0.034,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    elevation: 8,
  },
  listimg: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  listtitle: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    width: width * 0.52,
    marginBottom: -3,
  },
  listprice: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    width: width * 0.2,
    textAlign: 'center',
    marginBottom: -3,
  },
  listbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.014,
  },
 
});
