import React, {useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Home from './../../screens/home/index';
import Profile from './../../screens/profile/index';
import Cart from './../../screens/Cart/index';
import Feather from 'react-native-vector-icons/Feather';
import Favourite from './../../screens/favourite/index';
const {height, width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tableBarstyle,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: styles.headerstyle,
        tabBarLabel: '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={icons.toggle} style={styles.toggle} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <View style={styles.countbox}>
                <Text style={styles.count}>2</Text>
              </View>
              <Image source={icons.notify} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              style={[
                styles.icon_set,
                {
                  tintColor: focused ? COLORS.primary : COLORS.gray60,
                  shadowColor: focused && COLORS.primary,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.heart1}
              style={[
                styles.icon_set,
                {
                  tintColor: focused ? COLORS.primary : COLORS.gray60,
                  shadowColor: focused && COLORS.primary,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Feather
              name="shopping-cart"
              size={width * 0.055}
              color={focused ? COLORS.primary : COLORS.gray60}
              style={{
                marginTop: height * 0.01,
                shadowColor: focused && COLORS.primary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              style={[
                styles.icon_set,
                {
                  tintColor: focused ? COLORS.primary : COLORS.gray60,
                  shadowColor: focused && 'rgba(215, 56, 0, 0.4)',
                },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
