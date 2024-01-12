import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  const [error, setEror] = useState();
  const [postdata, setPostdata] = useState({
    phoneNumber: null,
  });

  const handleChange = (name, value) => {
    setPostdata({
      ...postdata,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StackNavigator');
          }}
          style={{marginRight: width * 0.06}}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <Image source={images.login} style={styles.login} />
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subheading}>Please enter your mobile no.</Text>
        <InputBox
          nineone
          placeholder={'Mobile no'}
          maxLength={10}
          keyboardType={'numeric'}
          value={postdata.phoneNumber}
          onChangeText={text => handleChange('phoneNumber', text, setEror(''))}
          errors={error}
        />
        <ButtonCustom
          children="GET OTP"
          mediumbtn
          btnStyle={styles.btn}
          onPress={() => {
            if (postdata.phoneNumber) {
              navigation.navigate('OTP');
            } else {
              setEror('Please enter phone number');
            }
          }}
          // load={loading}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
