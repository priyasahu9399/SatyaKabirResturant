import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  title: {
    color: COLORS.black,
    alignSelf: 'center',
    ...FONTS.sixHundred,
    fontSize: 18,
    textAlign: 'center',
    width: width * 0.9,
    marginTop: height * 0.62,
    marginBottom: height * 0.01,
  },
  subtitle: {
    color: '#535763',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    fontSize: 13,
    textAlign: 'center',
    width: width * 0.9,
    marginBottom: height * 0.02,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  skip: {
    color: COLORS.gray60,
    ...FONTS.sixHundred,
    fontSize: 13,
    alignSelf: 'flex-end',
    marginTop: height * 0.03,
  },
  dot_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: height * 0.025,
  },
  dot: {
    backgroundColor: COLORS.gray20,
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: 20,
    marginRight: width * 0.02,
  },
  rarrowBox: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: width * 0.019,
    top: width * 0.019,
  },
  rarrow: {
    width: width * 0.036,
    height: width * 0.036,
    resizeMode: 'contain',
  },
});
