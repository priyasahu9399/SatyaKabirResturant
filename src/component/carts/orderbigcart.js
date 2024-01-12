import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';
import ButtonCustom from './../Button/index';
const {width, height} = Dimensions.get('window');

const OrderCart = () => {
  return (
    <View style={styles.cartBox}>
      <Text style={styles.id}>#264100</Text>
      <View
        style={[
          styles.cartrow,
          {
            alignItems: 'center',
          },
        ]}>
        <View style={styles.cartimgbox}>
          <Image source={images.dot} style={styles.cartimg} />
        </View>
        <View>
          <Text style={styles.title}>Pizza large size</Text>
          <View style={styles.cartrow}>
            <Text style={styles.subtitle}>Domino</Text>
            <Image source={icons.right} style={styles.right} />
          </View>
        </View>
      </View>

      <View style={styles.cartrow}>
        <View style={{width: width * 0.6}}>
          <Text style={styles.lefttext1}>Estimated Arrival</Text>
          <View style={[styles.cartrow, {alignItems: 'center'}]}>
            <Text style={styles.time}>25</Text>
            <Text style={[styles.time, {fontSize: width * 0.028}]}>min</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.lefttext1, {textAlign: 'right'}]}>Now</Text>
          <Text style={styles.righttext1}>Food on the way</Text>
        </View>
      </View>
      <View style={styles.crtbtnrow}>
        <ButtonCustom
          children="Cancel"
          btnStyle={styles.cancel}
          btntextStyle={{color: COLORS.black}}
        />
        <ButtonCustom
          children="Track Order"
          btnStyle={{width: width * 0.4, height: height * 0.057}}
        />
      </View>
    </View>
  );
};

export default OrderCart;
const styles = StyleSheet.create({
  cartBox: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: width * 0.93,
    marginVertical: height * 0.01,
    paddingHorizontal: height * 0.012,
    alignSelf: 'center',
    elevation: 3,
    paddingVertical: height * 0.01,
  },
  cartrow: {
    flexDirection: 'row',
  },
  cartimgbox: {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartimg: {width: width * 0.12, height: width * 0.12, resizeMode: 'contain'},
  id: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: COLORS.primary,
    marginBottom: -3,
    textAlign: 'right',
  },
  title: {
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    color: COLORS.gray40,
    marginLeft: width * 0.03,
    width: width * 0.5,
  },
  subtitle: {
    ...FONTS.fourHundred,
    fontSize: width * 0.036,
    color: COLORS.black,
    marginLeft: width * 0.03,
  },
  right: {
    width: width * 0.03,
    height: width * 0.03,
    resizeMode: 'contain',
    marginLeft: width * 0.02,
    marginBottom: height * 0.01,
  },
  lefttext1: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray50,
    marginTop: height * 0.014,
  },
  righttext1: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.black,
    marginTop: 2,
  },
  time: {
    ...FONTS.sixHundred,
    fontSize: width * 0.055,
    color: COLORS.black,
    marginRight: width * 0.01,
  },
  crtbtnrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancel: {
    width: width * 0.4,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.gray60,
    height: height * 0.057,
  },
});
