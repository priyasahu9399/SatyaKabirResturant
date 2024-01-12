import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

const RestaurantS = ({marginleft, cartBgimg , navigation}) => {
  const [heart, setheart] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ItemDetail')}
      style={[styles.cartMainbox, marginleft]}>
      <ImageBackground
        resizeMode={'stretch'}
        source={images.chau2}
        style={[styles.cartBGimg, cartBgimg]}>
        <View style={styles.cartrow}>
          <View style={styles.cartratebox}>
            <Text style={styles.cartrate}>4.5</Text>
            <Image source={icons.star} style={styles.cartstar} />
            <Text style={styles.cartreview}>(25+)</Text>
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
      <View
        style={{
          marginHorizontal: width * 0.025,
          paddingBottom: height * 0.012,
        }}>
        <View style={styles.carticonrow}>
          <Text style={styles.cartheading}>McDonald’s</Text>
          <Image
            source={icons.right}
            style={[styles.cartstar, {marginLeft: width * 0.015}]}
          />
        </View>
        <View style={styles.carticonrow}>
          <View style={styles.carticonrow}>
            <Image source={icons.deliver} style={styles.deliver} />
            <Text style={styles.iconrighttext}>Free delivery</Text>
          </View>
          <View style={styles.carticonrow}>
            <Image source={icons.watch} style={styles.deliver} />
            <Text style={styles.iconrighttext}>F10-15 mins</Text>
          </View>
        </View>

        <View style={styles.carticonrow}>
          <View style={styles.cartlistbox}>
            <Text style={styles.cartlistboxtext}>BURGER</Text>
          </View>
          <View style={styles.cartlistbox}>
            <Text style={styles.cartlistboxtext}>CHIKEN</Text>
          </View>
          <View style={styles.cartlistbox}>
            <Text style={styles.cartlistboxtext}>Fast Food</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantS;
const styles = StyleSheet.create({
  cartMainbox: {
    width: width * 0.75,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: height * 0.02,
    elevation: 3,
    marginHorizontal: width * 0.02,
  },
  cartBGimg: {
    width: width * 0.75,
    height: height * 0.18,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  cartratebox: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.015,
    height: width * 0.067,
    borderRadius: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: height * 0.01,
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
  cartrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.03,
    marginTop: height * 0.01,
  },
  deliver: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  carticonrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconrighttext: {
    color: COLORS.gray70,
    fontSize: width * 0.03,
    ...FONTS.fourHundred,
    marginBottom: -3,
    marginRight: width * 0.04,
    marginLeft: width * 0.01,
  },
  cartlistbox: {
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.01,
    backgroundColor: '#F7F7F7',
    borderRadius: 6,
    marginTop: height * 0.01,
    marginHorizontal: width * 0.01,
  },
  cartlistboxtext: {
    color: COLORS.gray60,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
});
