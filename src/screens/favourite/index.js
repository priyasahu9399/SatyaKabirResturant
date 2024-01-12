import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import RestaurantS from './../../component/carts/resturantcart';
import ProductCart from './../../component/carts/productcart';

const {height, width} = Dimensions.get('window');

const Favourite = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.innercontainer}>
        <View style={styles.btnrow}>
          <TouchableOpacity
            onPress={() => {
              setActive(1);
            }}
            style={[
              styles.btnBox,
              active == 1 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[styles.btnBoxText, active == 1 && {color: COLORS.white}]}>
              Food Items
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive(2);
            }}
            style={[
              styles.btnBox,
              active == 2 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[styles.btnBoxText, active == 2 && {color: COLORS.white}]}>
              Resturents
            </Text>
          </TouchableOpacity>
        </View>
        {active == 1 && (
          <View style={{paddingBottom: height * 0.16}}>
            <FlatList
              data={data.NewProductCartdata}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <ProductCart
                  navigation={navigation}
                  cartmainstyle={{width: width * 0.94, alignSelf: 'center'}}
                  cartimgstyle={{width: width * 0.94, height: height * 0.2}}
                />
              )}
            />
          </View>
        )}
        {active == 2 && (
          <View style={{paddingBottom: height * 0.16}}>
            <FlatList
              data={data.NewProductCartdata}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <RestaurantS
                  navigation={navigation}
                  marginleft={{width: width * 0.94, alignSelf: 'center'}}
                  cartBgimg={{width: width * 0.94, height: height * 0.2}}
                />
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
