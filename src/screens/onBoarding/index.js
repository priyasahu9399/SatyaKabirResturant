import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {data} from './../../constants';
import {images, icons} from './../../constants';
import styles from './styles';
import ButtonCustom from './../../component/Button/index';
import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';
import {connect, useDispatch} from 'react-redux';
import {ONBOARDING} from './../../redux/types';
const {width, height} = Dimensions.get('window');
const OnBoardingData = [
  {
    id: 0,
    title: 'Various dishes',
    subTitle:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
    image: images.onboard1,
  },
  {
    id: 1,
    title: 'Many food service providers',
    subTitle:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
    image: images.onboard2,
  },
  {
    id: 2,
    title: 'Home Delivery',
    subTitle:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
    image: images.onboard3,
  },
  {
    id: 3,
    title: 'Track Order',
    subTitle:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
    image: images.onboard4,
  },
];
const OnboardingScreen = ({image, title, subTitle}) => {
  return (
    <View style={{width: width}}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </ImageBackground>
    </View>
  );
};
const Onboarding = ({navigation, onboard}) => {
  const dispatch = useDispatch();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data?.OnBoardingData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
          dispatch({
            type: ONBOARDING,
            payload: false,
          });
        }}
        style={{marginRight: width * 0.07}}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={OnBoardingData}
        renderItem={({item, index}) => (
          <OnboardingScreen
            key={index}
            image={item?.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />

      <View style={styles.dot_box}>
        {OnBoardingData.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.dot,
                currentSlideIndex === item.id && {
                  backgroundColor: COLORS.black,
                  width: width * 0.09,
                },
              ]}></View>
          );
        })}
      </View>

      {currentSlideIndex === 3 ? (
        <ButtonCustom
          children="GET START"
          onPress={() => {
            navigation.navigate('SignIn');
            dispatch({
              type: ONBOARDING,
              payload: false,
            });
          }}
          btnStyle={{marginBottom: height * 0.073, alignSelf: 'center'}}
        />
      ) : (
        <TouchableOpacity
          onPress={() => goNextSlide()}
          activeOpacity={0.1}
          style={{
            alignSelf: 'center',
            marginBottom: height * 0.06,
            flexDirection: 'row',
          }}>
          <CircularProgress
            value={(currentSlideIndex + 1) * 25}
            radius={width * 0.08}
            inActiveStrokeColor={COLORS.gray20}
            activeStrokeColor={COLORS.primary}
            activeStrokeWidth={2.5}
            inActiveStrokeWidth={2.5}
            progressValueColor={COLORS.primary}
            progressValueColor={'#fff'}
          />
          <View style={styles.rarrowBox}>
            <Image source={icons.rarrow} style={styles.rarrow} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = state => ({onboard: state.auth.onboard});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
