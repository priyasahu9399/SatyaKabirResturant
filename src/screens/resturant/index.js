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
import RestaurantS from './../../component/carts/resturantcart';

const {height, width} = Dimensions.get('window');

const Restaurant = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [heart, setheart] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <FlatList
          data={data.NewProductCartdata}
          renderItem={({item, index}) => (
            <RestaurantS
              marginleft={{width: width * 0.93, alignSelf: 'center'}}
              cartBgimg={{width: width * 0.93, height: height * 0.2}}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
