import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import Video from 'react-native-video';
import styles from './style';
import ModalComponent from '../../../components/itemModelCommentVideo';

const videos = [
  { id: '1', uri: require('../../../assets/video/2.mp4') },
  // Add more videos if needed
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const videoRefs = useRef({});

  const handleCommentPress = (videoId) => {
    // This can be replaced with actual functionality
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        ref={ref => videoRefs.current[item.id] = ref}
        source={item.uri}
        style={styles.video}
        controls={false}
        resizeMode="cover"
      />
      <TouchableOpacity 
        style={styles.commentButton} 
        onPress={() => handleCommentPress(item.id)}
      >
        <Text style={styles.commentButtonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
      <ModalComponent
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default HomeScreen;
