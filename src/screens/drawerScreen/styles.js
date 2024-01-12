import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  logo: {
    width: width * 0.7,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cross: {
    width: width * 0.056,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: width * 0.1,
    marginTop: height * 0.04,
  },
  collapsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.038,
  },
  collapsimg: {
    width: width * 0.09,
    height: width * 0.09,
    resizeMode: 'contain',
    marginHorizontal: width * 0.04,
    tintColor: COLORS.gray70,
  },
  collapstitle: {
    ...FONTS.fourHundred,
    color: COLORS.gray70,
    fontSize: width * 0.035,
    marginBottom: -4,
  },
});
