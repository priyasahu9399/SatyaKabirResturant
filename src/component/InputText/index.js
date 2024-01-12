import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const InputBox = ({
  placeholder,
  search,
  onPressIn,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  nineone,
  inputboxwidth,
}) => {
  return (
    <View>
      {label && (
        <Text
          style={[
            styles.label,
            inputboxwidth && {
              width: SIZES.width * 0.93,
              marginLeft: SIZES.width * 0.01,
            },
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.box1,
          inputboxwidth && {width: SIZES.width * 0.93, borderRadius: 10},
          inputboxstyle,
        ]}>
        {nineone && <Text style={styles.nineone}>+91</Text>}
        <TextInput
          placeholder={placeholder}
          style={[styles.placeholdera, icon && {width: SIZES.width * 0.8}]}
          onPressIn={onPressIn}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.gray30}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          numberOfLines={numberOfLines}
        />
        {icon && <Image source={icon} style={styles.icon} />}
      </View>
      {errors ? <Text style={[styles.error, errorstyle]}>{errors}</Text> : null}
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  box1: {
    width: SIZES.width * 0.9,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: SIZES.height * 0.06,
  },
  placeholdera: {
    ...FONTS.fiveHundred,
    fontSize: SIZES.width * 0.032,
    paddingLeft: SIZES.width * 0.03,
    color: COLORS.black,
    marginBottom: -3,
    width: SIZES.width * 0.92,
  },
  label: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
  },
  nineone: {
    ...FONTS.fiveHundred,
    fontSize: SIZES.width * 0.035,
    paddingLeft: SIZES.width * 0.03,
    color: COLORS.gray30,
    marginBottom: -3,
    borderRightWidth: 1.5,
    paddingRight: SIZES.width * 0.02,
    borderColor: COLORS.gray30,
  },
  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
  error: {
    color: COLORS.primary,
    fontSize: 12,
    ...FONTS.fiveHundred,
    marginLeft: SIZES.width * 0.02,
    marginTop: SIZES.height * -0.012,
    marginBottom: SIZES.height * 0.02,
  },
});
