import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ButtonCustom from './../../component/Button/index';
import AddressCart from './../../component/carts/address';

const {height, width} = Dimensions.get('window');

const DeliveryAddress = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [isSelected, setisSelected] = useState();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.AddressCartdata}
          renderItem={({item, index}) => (
            <AddressCart
              key={item?.id}
              name={item?.name}
              no={item?.no}
              address={item?.address}
              edit={isSelected == index ? 'Selected' : 'Edit'}
              onPress={() => setisSelected(index)}
              onPressedit={() => navigation.navigate('AddAddress')}
            />
          )}
        />
        <ButtonCustom
          children="ADD ADDRESS"
          btnStyle={{
            alignSelf: 'center',
            marginBottom: height * 0.03,
            marginTop: height * 0.05,
          }}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);
