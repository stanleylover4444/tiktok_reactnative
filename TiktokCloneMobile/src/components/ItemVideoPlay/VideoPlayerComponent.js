import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video'; // Use 'expo-av' if needed
import { useRoute } from '@react-navigation/native';
import styles from './style';
import ModalComponent from '../itemModelCommentVideo';

const VideoPlayerComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { uri } = route.params;  // Receiving uri from params

  const handleCommentPress = (videoUri) => {
    setModalVisible(true);
    // Add additional functionality here if needed
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: uri }}
        style={styles.videoplay}
        controls={false}
        resizeMode="cover"
      />
      <View style={styles.containerComponent}>
        <TouchableOpacity 
          style={styles.commentButton} 
          onPress={() => handleCommentPress(uri)}  // Pass the video URI
        >
          <Text style={styles.commentButtonText}>Comment</Text>
        </TouchableOpacity>
      </View>

      <ModalComponent
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default VideoPlayerComponent;
