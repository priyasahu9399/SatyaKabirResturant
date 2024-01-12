import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS} from '../../constants';
import {connect} from 'react-redux';
import {http2} from './../../services/api';

const {width, height} = Dimensions.get('window');

const HomeSlider = ({onPress, datalist, scrollimgstyle, source}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == datalist?.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 4000);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != datalist?.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View>
      <FlatList
        data={datalist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View key={index} onPress={onPress} style={styles.scrollBox}>
            <Image
              source={item?.image}
              style={[styles.scrollImage, scrollimgstyle]}
            />
          </View>
        )}
      />
      <View style={styles.dotbox}>
        {datalist?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === index ? COLORS.primary : COLORS.gray30,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default HomeSlider;
const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  scrollImage: {
    width: width * 0.94,
    height: height * 0.21,
    borderRadius: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: width * 0.07,
    bottom: height * 0.015,
    paddingHorizontal: width * 0.015,
    paddingVertical: width * 0.014,
    borderRadius: 30,
  },
  dotstyle: {
    height: width * 0.022,
    width: width * 0.022,
    marginRight: width * 0.01,
    borderRadius: 10,
  },
});
