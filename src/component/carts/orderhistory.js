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

const OrderHistory = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.cartBox}>
      <View style={[styles.cartrow]}>
        <View style={styles.cartimgbox}>
          <Image source={images.jj} style={styles.cartimg} />
        </View>
        <View>
          <View style={[styles.cartrow]}>
            <Text style={[styles.lefttext1, {marginLeft: width * 0.03}]}>
              20 Jun, 10:30
            </Text>
            <View style={styles.dotstyle}></View>
            <Text style={styles.lefttext1}>3 Items</Text>
            <Text style={styles.id}>$17.10</Text>
          </View>
          <View style={styles.cartrow}>
            <Text style={styles.subtitle}>Jimmy John’s </Text>
            <Image source={icons.right} style={styles.right} />
          </View>
          <View style={styles.cartrow}>
            <View style={styles.deliverdotstyle}></View>
            <Text style={styles.deliver}>Order Delivered</Text>
          </View>
        </View>
      </View>

      <View style={styles.crtbtnrow}>
        <ButtonCustom
          children="Rate"
          btnStyle={styles.cancel}
          btntextStyle={{color: COLORS.black}}
        />
        <ButtonCustom
          children="Re-Order"
          btnStyle={{width: width * 0.4, height: height * 0.057}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default OrderHistory;
const styles = StyleSheet.create({
 
  cartBox: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: width * 0.93,
    marginVertical: height * 0.01,
    paddingHorizontal: height * 0.012,
    alignSelf: 'center',
    elevation: 3,
    paddingTop: height * 0.014,
    paddingBottom: height * 0.008,
  },
  cartrow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: width * 0.2,
  },
  subtitle: {
    ...FONTS.sixHundred,
    fontSize: width * 0.035,
    color: COLORS.black,
    marginLeft: width * 0.03,
    marginVertical: height * 0.004,
  },
  right: {
    width: width * 0.028,
    height: width * 0.028,
    resizeMode: 'contain',
  },
  lefttext1: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray50,
  },
  dotstyle: {
    width: width * 0.018,
    height: width * 0.018,
    backgroundColor: COLORS.gray30,
    borderRadius: 20,
    marginLeft: width * 0.03,
    marginRight: width * 0.015,
    marginBottom: width * 0.01,
  },
  deliverdotstyle: {
    width: width * 0.021,
    height: width * 0.021,
    backgroundColor: 'rgba(78, 228, 118, 1)',
    borderRadius: 20,
    marginLeft: width * 0.03,
    marginRight: width * 0.015,
  },
  deliver: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: 'rgba(78, 228, 118, 1)',
    marginBottom: -3,
  },

  crtbtnrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.014,
  },
  cancel: {
    width: width * 0.4,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.gray60,
    height: height * 0.057,
  },
});
