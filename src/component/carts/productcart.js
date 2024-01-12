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
const {width, height} = Dimensions.get('window');

const ProductCart = ({
  image,
  title,
  subtitle,
  price,
  mrpprice,
  rate,
  ratings,
  onPressimg,
  off,
  marginleft,
  btnStyle,
  heartactive,
  onPressremove,
  id,
  disabled,
  // ------------------
  navigation,
  cartmainstyle,
  cartimgstyle,
}) => {
  const [heart, setheart] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('ItemDetail')}
      style={[styles.cartMainbox, cartmainstyle]}>
      <ImageBackground
        resizeMode={'stretch'}
        source={images.chau3}
        style={[styles.cartBGimg, cartimgstyle]}>
        <View style={styles.cartheadrow}>
          <View style={styles.cartrupebox}>
            <Text style={styles.rupee}>₹</Text>
            <Text style={styles.cartrupe}>90</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setheart(!heart)}>
            <View
              style={[
                styles.cartheartbox,
                heart == true && {backgroundColor: COLORS.primary},
              ]}>
              <Image source={icons.heart3} style={styles.cartheart} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View>
        <View style={styles.cartratebox}>
          <Text style={styles.cartrate}>4.5</Text>
          <Image source={icons.star} style={styles.cartstar} />
          <Text style={styles.cartreview}>(25+)</Text>
        </View>
        <Text style={styles.cartheading}>Salmon Salad</Text>
        <Text style={styles.cartsubheading}>Baked salmon fish</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);

const styles = StyleSheet.create({
  // -----cart---

  cartMainbox: {
    width: width * 0.44,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: height * 0.024,
  },
  cartBGimg: {
    width: width * 0.44,
    height: height * 0.18,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cartrupebox: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.02,
    height: width * 0.062,
    borderRadius: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  cartheadrow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: width * 0.02,
  },
  cartrupe: {
    fontSize: width * 0.035,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    marginBottom: -4,
  },
  rupee: {
    fontSize: width * 0.03,
    color: COLORS.primary,
    ...FONTS.sixHundred,
    marginBottom: -height * 0.009,
  },
  cartheartbox: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 40,
    backgroundColor: '#FFFFFF33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01,
  },
  cartheart: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  cartratebox: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.015,
    height: width * 0.066,
    borderRadius: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: width * -0.04,
    left: width * 0.02,
    shadowColor: COLORS.primary,
    elevation: 8,
    shadowOffset: {width: 8, height: 4},
    shadowOpacity: 4,
    shadowRadius: 10,
  },
  cartrate: {
    color: COLORS.black,
    fontSize: width * 0.028,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  cartstar: {
    width: width * 0.04,
    height: width * 0.036,
    resizeMode: 'contain',
  },
  cartreview: {
    color: COLORS.gray50,
    fontSize: width * 0.024,
    ...FONTS.fourHundred,
    marginBottom: -3,
  },
  cartheading: {
    color: COLORS.black,
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    marginTop: height * 0.02,
  },
  cartsubheading: {
    color: COLORS.gray50,
    fontSize: width * 0.028,
    ...FONTS.fiveHundred,
  },
});
