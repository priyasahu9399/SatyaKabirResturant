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
import SearchBox from './../../component/InputText/search';
import {Button, ModalLoading} from 'react-native-components-design';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import ProductCart from './../../component/carts/productcart';
import RestaurantS from './../../component/carts/resturantcart';

const {height, width} = Dimensions.get('window');
const rest = [{}, {}, {}];

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  navigation?.setOptions({
    headerTitle: () => (
      <View>
        <View style={styles.addrow}>
          <Text style={styles.deliveradd}>Delivery Address</Text>
          <Image source={icons.darrow} style={styles.darrow} />
        </View>
        <Text style={styles.addresssubtext}>prem nagar, sindhur 825301</Text>
      </View>
    ),
    headerTitleAlign: 'center',
  });
  const {entries, activeSlide} = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <SearchBox editable={false} />
        <HomeSlider datalist={data.homesliderlist} />
        <View style={styles.headrow}>
          <Text style={styles.leftText}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.rightText}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data.categorylist}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setActive(index)}
              key={item => item?.id}
              activeOpacity={0.6}
              style={[
                styles.listbox,
                active == index && styles.listactive,
                {
                  marginLeft: index == 0 ? width * 0.028 : width * 0.005,
                  marginRight:
                    data.categorylist?.length - 1 ? width * 0.02 : width * 0.01,
                },
              ]}>
              <Text
                style={[
                  styles.listboxtext,
                  active == index && {color: COLORS.white},
                ]}>
                {item.text}
              </Text>
              <View style={styles.listImagebox}>
                <Image source={images.chau} style={styles.listImage} />
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={data.NewProductCartdata}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          renderItem={({item, index}) => (
            <ProductCart navigation={navigation} />
          )}
        />
        <View style={styles.headrow}>
          <Text style={styles.leftText}>Top Restaurants</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Restaurant')}
            style={styles.addrow}>
            <Text style={[styles.rightText, {color: COLORS.primary}]}>
              View All
            </Text>
            <Image source={icons.rarrow} style={styles.rarrow} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={rest}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RestaurantS
              navigation={navigation}
              marginleft={{
                marginLeft: index == 0 ? width * 0.032 : width * 0.01,
                marginRight:
                  data.NewProductCartdata?.length - 1 ? width * 0.024 : 0,
              }}
            />
          )}
        />

        <View style={styles.headrow}>
          <Text style={styles.leftText}>Popular Items</Text>
        </View>
        <FlatList
          data={data.NewProductCartdata}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          renderItem={({item, index}) => (
            <ProductCart navigation={navigation} />
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
