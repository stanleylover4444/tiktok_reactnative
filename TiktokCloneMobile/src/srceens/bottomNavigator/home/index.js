import React, { useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import Video from 'react-native-video';
import styles from './style'; // Đảm bảo đường dẫn là chính xác

// const videos = [
//   { id: '1', uri: require('../../../assets/video/2.mp4') },
//   { id: '2', uri: require('../../../assets/video/1.mp4') },
//   { id: '3', uri: require('../../../assets/video/1.mp4') }
// ];

const HomeScreen = () => {
  
  const videoRefs = useRef({});
  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        ref={ref => videoRefs.current[item.id] = ref}
        source={item.uri}
        style={styles.video}
        resizeMode="cover"
        controls={false}
        repeat
  
      />
    </View>
  );

  return (
    // <FlatList
    //   data={videos}
    //   renderItem={renderItem}
    //   keyExtractor={item => item.id}
    //   pagingEnabled
    //   showsVerticalScrollIndicator={false}
    // />

    <View>
      <Text> sdas</Text>
    </View>
  );
};

export default HomeScreen;
