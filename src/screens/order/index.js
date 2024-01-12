import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import ButtonCustom from './../../component/Button/index';
import OrderCart from './../../component/carts/orderbigcart';
import OrderHistory from './../../component/carts/orderhistory';

const {height, width} = Dimensions.get('window');

const Order = ({navigation}) => {
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
              Upcoming
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
              History
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <OrderCart />
          <View style={{paddingBottom: height * 0.1}}>
            <Text style={styles.heading}>Lasted Orders</Text>
            <FlatList
              data={data.NewProductCartdata}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => <OrderHistory />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
