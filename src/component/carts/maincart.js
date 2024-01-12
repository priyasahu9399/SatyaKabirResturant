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
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

const CartComponent = () => {
  const [count, setcount] = useState(1);
  const [countactive, setcountactive] = useState();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.cartBox, styles.cartrow]}>
      <Image style={styles.cartimgbox} source={images.home2} />
      <View>
        <View style={styles.cartrow}>
          <Text style={styles.title}>Red n hot pizza</Text>
          <TouchableOpacity>
            <Image source={icons.x} style={styles.right} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Spicy chicken, beef</Text>
        <View style={[styles.cartrow, {justifyContent: 'space-between'}]}>
          <Text style={styles.price}>$15.30</Text>
          <View style={styles.cartrow}>
            <TouchableOpacity
              onPress={() => {
                if (count == 1) {
                  setcount(1);
                } else {
                  setcount(count - 1);
                }
                setcountactive(1);
              }}
              style={[
                styles.minusplusiconbox,
                countactive == 1 && styles.activeincre,
              ]}>
              <Entypo
                name="minus"
                size={width * 0.045}
                style={
                  countactive == 1
                    ? {color: COLORS.white}
                    : {color: COLORS.primary}
                }
              />
            </TouchableOpacity>
            <Text style={styles.minusplus}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                setcount(count + 1), setcountactive(2);
              }}
              style={[
                styles.minusplusiconbox,
                countactive == 2 && styles.activeincre,
              ]}>
              <Entypo
                name="plus"
                size={width * 0.045}
                style={
                  countactive == 2
                    ? {color: COLORS.white}
                    : {color: COLORS.primary}
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartComponent;
const styles = StyleSheet.create({
  cartBox: {
    backgroundColor: COLORS.white,
    width: width * 0.93,
    marginBottom: height * 0.027,
    alignSelf: 'center',
  },
  cartrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartimgbox: {
    width: width * 0.22,
    height: width * 0.22,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.03,
    overflow: 'hidden',
  },
  price: {
    ...FONTS.sixHundred,
    fontSize: width * 0.033,
    color: COLORS.primary,
  },
  title: {
    ...FONTS.sixHundred,
    fontSize: width * 0.034,
    color: COLORS.black,
    width: width * 0.6,
  },
  subtitle: {
    ...FONTS.fourHundred,
    fontSize: width * 0.031,
    color: COLORS.gray40,
    // marginLeft: width * 0.03,
  },
  right: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: 'contain',
  },
  minusplusiconbox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: width * 0.07,
    height: width * 0.068,
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
});
