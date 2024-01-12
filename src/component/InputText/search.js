import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const {width, height} = Dimensions.get('window');

const SearchBox = ({
  placeholder,
  searchStyle,
  editable,
  onPressfilter,
  disabled,
  onPresssearch,
  disabledfilter,
  onChangeText,
  value,
  filter,
  autoFocus,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPresssearch}
      activeOpacity={0.6}
      style={[styles.searchbox, searchStyle]}>
      <Image source={icons.search} style={styles.search} />
      <TextInput
        editable={editable}
        placeholder={'Search for food, Restaurant....'}
        style={[styles.searchinput]}
        placeholderTextColor={COLORS.gray40}
        onChangeText={onChangeText}
        value={value}
        autoFocus={autoFocus}
      />
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    height: height * 0.058,
    width: width * 0.94,
    marginVertical: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray30,
    alignSelf: 'center',
    elevation: 4,
    paddingHorizontal: width * 0.02,
  },
  search: {
    height: height * 0.028,
    width: width * 0.042,
    marginHorizontal: width * 0.02,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  searchinput: {
    width: width * 0.57,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: -3,
    color: COLORS.black,
  },
});
