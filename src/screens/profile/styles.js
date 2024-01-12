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
  profilebox: {
    width: width * 0.28,
    height: width * 0.28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginBottom: height * 0.008,
    marginTop: height * 0.05,
    shadowColor: COLORS.primary,
    elevation: 8,
    shadowOffset: {width: width * 0.15, height: 4},
    shadowOpacity: 6,
    shadowRadius: 10,
    backgroundColor: COLORS.white,
  },
  profile: {
    width: width * 0.28,
    height: width * 0.28,
    resizeMode: 'contain',
    borderRadius: 90,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.04,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
  },
  edit: {
    color: COLORS.gray40,
    fontSize: width * 0.03,
    ...FONTS.fourHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  // // ----modal
  // modalBox: {
  //   backgroundColor: COLORS.white,
  //   width: width * 0.9,
  //   paddingVertical: height * 0.03,
  //   paddingHorizontal: height * 0.02,
  //   borderRadius: 8,
  // },
  // row: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
  // modalSubtitle: {
  //   color: COLORS.primary,
  //   ...FONTS.sixHundred,
  //   fontSize: width * 0.035,
  //   alignSelf: 'center',
  //   marginBottom: height * 0.025,
  // },
});
