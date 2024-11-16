import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import VideoPlayer from './VideoPlayer';
import videosData from './videosData';

import {
    useBottomTabBarHeight,
  } from '@react-navigation/bottom-tabs';
import { WINDOW_HEIGHT } from './utils';

const HomeScreen = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    const bottomTabHeight = useBottomTabBarHeight();
    return (
        <FlatList
          data={videosData}
          pagingEnabled
          renderItem={({item, index}) => (
            <VideoPlayer data={item} isActive={activeVideoIndex === index} />
          )}
          onScroll={e => {
            const index = Math.round(
              e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight),
            );
            setActiveVideoIndex(index);
          }}
        />
      );
    };

export default HomeScreen;
