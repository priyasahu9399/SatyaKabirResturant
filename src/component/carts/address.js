import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, icons} from '../../constants';
const {height, width} = Dimensions.get('window');

const AddressCart = ({
  disabled,
  onPress,
  onPressedit,
  name,
  address,
  no,
  edit,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.addressbox}>
      <TouchableOpacity
        style={styles.editbox}
        disabled={edit == 'Selected' ? true : false}
        onPress={onPressedit}>
        <Text
          style={[styles.edit, edit == 'Selected' && {color: COLORS.green}]}>
          {edit}
        </Text>
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address} </Text>
      <Text style={[styles.address, {borderBottomWidth: 0}]}>{no} </Text>
    </TouchableOpacity>
  );
};

export default AddressCart;

const styles = StyleSheet.create({
  addressbox: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: width * 0.92,
    marginVertical: height * 0.01,
    paddingHorizontal: height * 0.022,
    alignSelf: 'center',
    shadowColor: COLORS.black,
    elevation: 8,
    shadowOffset: {width: width * 0.15, height: 4},
    paddingTop: height * 0.01,
    paddingBottom: height * 0.02,
  },
  editbox: {
    alignSelf: 'flex-end',
    width: width * 0.2,
    height: height * 0.033,
    marginBottom: height * -0.015,
  },
  edit: {
    color: COLORS.primary,
    ...FONTS.fiveHundred,
    fontSize: width * 0.034,
    textAlign: 'right',
  },
  name: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.036,
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    width: width * 0.76,
    alignSelf: 'center',
  },
  address: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    width: width * 0.76,
    marginTop: height * 0.01,
    alignSelf: 'center',
  },
});
