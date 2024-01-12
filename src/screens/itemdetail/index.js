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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import ButtonCustom from './../../component/Button/index';
import Entypo from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

const ItemDetail = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [heart, setheart] = useState(false);
  const [count, setcount] = useState(1);
  const [countactive, setcountactive] = useState();
  const [radio, setRadio] = useState();

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          resizeMode={'stretch'}
          source={images.home2}
          style={styles.cartBGimg}>
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
        </ImageBackground>

        <Text style={styles.title}>Ground Beef Tacos</Text>

        <View style={[styles.row, {marginVertical: height * 0.008}]}>
          <Image source={icons.star} style={styles.cartstar} />
          <Text style={styles.cartrate}>4.5</Text>
          <Text style={styles.cartreview}>(25+)</Text>

          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.seereview}>See Review</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.increrow}>
          <View style={styles.row}>
            <Text style={styles.rupee}>$</Text>
            <Text style={styles.cartrupe}>9.50</Text>
          </View>
          <View style={styles.row}>
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

        <Text style={styles.subtitle}>
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </Text>
        <Text style={styles.heading}>Choice of Add On</Text>
        <FlatList
          data={data.choiceadd}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={() => setRadio(index)}
              style={styles.listbox}>
              <Image source={item?.img} style={styles.listimg} />
              <Text style={styles.listtitle}>{item?.text1}</Text>
              <Text style={styles.listprice}>{item?.price}</Text>
              <View
                style={[
                  styles.radioBox,
                  radio == index && {borderColor: COLORS.primary},
                ]}>
                {radio == index && <Text style={styles.radioInner}></Text>}
              </View>
            </TouchableOpacity>
          )}
        />
        <ButtonCustom
          children="Add to cart "
          btnStyle={{
            alignSelf: 'center',
            width: width * 0.4,
            marginTop: height * 0.05,
            marginBottom: height * 0.03,
          }}
          iconbtns
          onPress={() => navigation.navigate('Cart')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
