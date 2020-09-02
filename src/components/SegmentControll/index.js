import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

// So that it stretches in landscape mode.
const width = Dimensions.get('screen').width - 32;

const SegmentedControl = (props) => {
  const translateValue = (width - 4) / props?.tabs?.length;
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback(
    (index) => {
      props?.onChange(index);
    },
    [props],
  );

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: props?.currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [props.currentIndex, tabTranslate, translateValue]);

  return (
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          backgroundColor: props?.segmentedControlBackgroundColor,
        },
        {
          paddingVertical: props?.paddingVertical,
        },
      ]}>
      <Animated.View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            ...StyleSheet.absoluteFill,
            position: 'absolute',
            width: (width - 4) / props?.tabs?.length,
            top: 0,
            marginVertical: 2,
            marginHorizontal: 2,
            backgroundColor: props?.activeSegmentBackgroundColor,
            borderRadius: 8,
            ...styles.shadow,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      />
      {props?.tabs.map((tab, index) => {
        const isCurrentIndex = props?.currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}>
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                {color: props?.textColor},
                isCurrentIndex && {color: props?.activeTextColor},
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
};

SegmentedControl.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: '#E5E5EA',
  activeSegmentBackgroundColor: 'white',
  textColor: 'black',
  activeTextColor: 'black',
  paddingVertical: 12,
};

export default SegmentedControl;
