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
  TextInput,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect} from 'react-redux';
import styles from './styles';
import Loader from './../../component/modalLoading/index';
import ButtonCustom from './../../component/Button/index';
import CartComponent from './../../component/carts/maincart';

const {height, width} = Dimensions.get('window');
const Cart = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <FlatList
          data={data.cartdata}
          renderItem={({item, index}) => <CartComponent />}
        />

        <View style={styles.btnrow}>
          <TextInput
            placeholderTextColor={COLORS.gray30}
            placeholder={'Promo Code'}
            style={styles.input}
          />
          <ButtonCustom children="Apply" btnStyle={{width: width * 0.3}} />
        </View>

        <View style={{marginBottom: height * 0.04}}>
          <View style={styles.row}>
            <Text style={styles.summry}>Subtotal</Text>
            <Text style={styles.price}>$27.30 </Text>
            <Text style={styles.usd}>USD</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.summry}>Tax and Fees</Text>
            <Text style={styles.price}>$52.30 </Text>
            <Text style={styles.usd}>USD</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.summry}>Delivery</Text>
            <Text style={styles.price}>$11.30 </Text>
            <Text style={styles.usd}>USD</Text>
          </View>
          <View style={[styles.row, {borderBottomWidth: 0}]}>
            <Text style={[styles.summry, {color: COLORS.gray40}]}>
              (2 items)
            </Text>
            <Text style={styles.price}>$33.60 </Text>
            <Text style={styles.usd}>USD</Text>
          </View>
        </View>
        <View style={styles.cartrow}>
          <Text style={styles.addheading}>Address details</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.addressbox}>
          <Text style={styles.name}>Marvis Kparobo</Text>
          <Text style={styles.address}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </Text>
          <Text style={[styles.address, {borderBottomWidth: 0}]}>
            +234 9011039271
          </Text>
        </TouchableOpacity>

        <ButtonCustom
          children="CHECKOUT"
          btnStyle={{
            alignSelf: 'center',
            marginBottom: height * 0.04,
            marginTop: height * 0.04,
          }}
          onPress={() => navigation.navigate('Order')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
