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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import LoginBox from './../../component/carts/login';
import {AUTH_TOKEN} from './../../redux/types';
import {AuthFunction} from './../../redux/actions/authActions';
import InputBox from './../../component/InputText/index';
const {height, width} = Dimensions.get('window');

const Profile = ({navigation, token}) => {
  const [postdata, setPostdata] = useState({
    fullname: null,
    email: null,
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
        style={styles.innercontainer}>
        <View style={styles.profilebox}>
          <Image source={images.profile} style={styles.profile} />
        </View>
        <Text style={styles.heading}>Rajiv Ranjan</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.edit}>Edit Profile</Text>
        </TouchableOpacity>
        <InputBox
          label="Full name"
          // placeholder="Full name"
          onChangeText={text => handleChange('fullname', text)}
          value={postdata?.fullname}
          inputboxwidth
          inputboxstyle={{marginBottom: height * 0.025}}
        />
        <InputBox
          label="E-mail"
          // placeholder="Enter E-mail"
          onChangeText={text => handleChange('email', text)}
          value={postdata?.email}
          inputboxwidth
          inputboxstyle={{marginBottom: height * 0.025}}
        />
        <InputBox
          label="Phone Number"
          // placeholder="phone Number"
          keyboardType="numeric"
          maxLength={10}
          onChangeText={text => handleChange('phoneNumber', text)}
          value={postdata?.phoneNumber}
          inputboxwidth
        />
        {/* <LoginBox onPress={() => navigation.navigate('SignIn')} /> */}
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  token: state.auth.token,
});
const mapDispatchToProps = {AuthFunction};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
