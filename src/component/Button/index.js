import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, icons, images} from './../../constants';
const {height, width} = Dimensions.get('window');

const ButtonCustom = ({
  onPress,
  children,
  iconbtns,
  btnStyle,
  btntextStyle,
  load,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      style={[styles.longButton, btnStyle]}>
      {load && (
        <View style={styles.indBox}>
          <ActivityIndicator size={width * 0.065} color={COLORS.white} />
        </View>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {iconbtns && (
          <View style={styles.iconbtnbox}>
            <Image source={icons.bag} style={styles.iconbtn} />
          </View>
        )}
        <Text style={[styles.buttonText, btntextStyle]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  longButton: {
    width: width * 0.54,
    height: height * 0.063,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    elevation: 12,
    shadowOffset: {width: width * 0.15, height: height * 0.15},
    shadowOpacity: 6,
    shadowRadius: 10,
  },
  icon: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.fiveHundred,
    fontSize: width * 0.036,
    marginBottom: -3,
  },
  indBox: {marginLeft: width * -0.03, marginRight: width * 0.02},
  iconbtnbox: {
    width: width * 0.114,
    height: width * 0.11,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.02,
    marginLeft: width * -0.01
  },
  iconbtn: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
});
export default ButtonCustom;
