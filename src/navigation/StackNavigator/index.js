import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, Image, Text, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from '../BottomTabNavigator';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from './../BottomTabNavigator';
import {COLORS, icons} from '../../constants';
import styles from './styles';
import Restaurant from './../../screens/resturant/index';
import ItemDetail from './../../screens/itemdetail/index';
import AddAddress from './../../screens/addAddress/index';
import DeliveryAddress from './../../screens/deliveryaddress/index';
import Order from './../../screens/order/index';

const Stack = createStackNavigator();
const {height, width} = Dimensions.get('window');

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: styles.headerstyle,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{
          title: 'Item Detail',
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          title: 'Add Address',
        }}
      />
      <Stack.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{
          title: 'Delivery Address',
        }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
        }}
      />
     

      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
