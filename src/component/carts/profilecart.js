import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
const {width, height} = Dimensions.get('window');

const ProfileBox = ({
  text,
  profileimage,
  onPress,
  profileBoxStyle,
  protext,
  proimg,
  rarrow,
  orangeicon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.box1,
        orangeicon && {marginTop: height * 0.025},
        profileBoxStyle,
      ]}
      activeOpacity={0.6}
      onPress={onPress}>
      {orangeicon ? (
        <View style={styles.imgbox}>
          <Image source={profileimage} style={[styles.img, proimg]} />
        </View>
      ) : (
        <Image
          source={profileimage}
          style={[
            styles.img,
            {marginHorizontal: width * 0.03, tintColor: COLORS.gray60},
            proimg,
          ]}
        />
      )}

      <Text style={[styles.text, protext]}>{text}</Text>
      {rarrow && <Image source={icons.R_arrow} style={styles.arrow} />}
    </TouchableOpacity>
  );
};

export default ProfileBox;

const styles = StyleSheet.create({
  box1: {
    width: width * 0.94,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.035,
  },
  imgbox: {
    height: width * 0.085,
    width: width * 0.085,
    marginRight: width * 0.03,
    backgroundColor: COLORS.gray10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  img: {
    height: height * 0.023,
    width: width * 0.046,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  arrow: {
    height: height * 0.015,
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
    marginBottom: -5,
  },
  text: {
    width: width * 0.75,
    ...FONTS.fiveHundred,
    color: COLORS.gray60,
    fontSize: width * 0.034,
    marginBottom: -3,
  },
});
