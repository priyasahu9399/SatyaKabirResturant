import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
const {height, width} = Dimensions.get('window');

const DrawerList = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.collapsbox}>
      <Image source={icon} style={styles.collapsimg} />
      <Text style={styles.collapstitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const DrawerScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation?.closeDrawer()}>
        <Image source={icons.x} style={styles.cross} />
      </TouchableOpacity>
      <Image source={images.logo} style={styles.logo} />
      <DrawerList
        icon={icons.dhome}
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerList icon={icons.dcart} title="My Order" />
      <DrawerList icon={icons.dstar} title="Rate the App" />
      <DrawerList icon={icons.dorder} title="Privacy Policy" />
      <DrawerList icon={icons.di} title="Term & Condition" />
      <DrawerList icon={icons.dreturn} title="Return Policy" />
      <DrawerList icon={icons.dque} title="Support Policy" />
      <DrawerList icon={icons.dcontact} title="Contact Us" />
    </ScrollView>
  );
};
export default DrawerScreen;
