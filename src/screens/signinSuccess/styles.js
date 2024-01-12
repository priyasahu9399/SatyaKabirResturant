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

  login: {
    width: width * 0.9,
    height: height * 0.4,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginVertical: height * 0.03,
  },

  subheading: {
    color: COLORS.green,
    fontSize: width * 0.05,
    ...FONTS.sixHundred,
    paddingBottom: -4,
    alignSelf: 'center',
    marginTop: height * 0.18,
  },
});
