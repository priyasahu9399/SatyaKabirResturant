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
    alignSelf: 'center',
    width: width * 0.94,
  },
  btnrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 0.6,
    borderColor: COLORS.gray10,
    borderRadius: 60,
    marginBottom: height * 0.01,
  },
  btnBox: {
    marginVertical: height * 0.004,
    width: width * 0.45,
    height: height * 0.063,
    backgroundColor: COLORS.white,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnBoxText: {
    color: COLORS.primary,
    ...FONTS.fiveHundred,
    fontSize: width * 0.037,
    marginBottom: -3,
  },
});
