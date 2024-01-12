import React, {useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, COLORS} from './../constants/index';
import StackNavigator from './../navigation/StackNavigator/index';
import {connect} from 'react-redux';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from './../screens/drawerScreen/index';
import SignIn from './../screens/SignIn/index';
import OTP from './../screens/otp/index';
import Success from './../screens/signinSuccess/index';
import Onboarding from './../screens/onBoarding';
import SplashScreen from 'react-native-splash-screen';
import {AuthFunction} from './../redux/actions/authActions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

const Root = ({token, navigation, onboard, AuthFunction}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      screenOptions={{
        drawerStyle: {
          width: width * 0.78,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleStyle: styles.headerTitle,
        headerShown: false,
      }}>
      {onboard && <Stack.Screen name="Onboarding" component={Onboarding} />}
      <Stack.Screen name="StackNavigator" component={StackNavigator} />
      {token == null && (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="OTP" component={OTP} />
        </>
      )}
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => ({
  onboard: state?.auth?.onboard,
  token: state?.auth?.token,
});
const mapDispatchToProps = {AuthFunction};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 19,
  },
});
