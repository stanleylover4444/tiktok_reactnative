import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video'; // Use 'expo-av' if needed
import { useRoute } from '@react-navigation/native';
import styles from './style';
import ModalComponent from '../itemModelCommentVideo';


import CommentIcon from '../../assets/icons/ic_cmt';
import IconLikeVideo from '../../assets/icons/ic_likevideo';
import IconSaveVideo from '../../assets/icons/ic_saveVideo';

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
        paused
      />
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          
          onPress={() => handleCommentPress()}
        >
       <IconLikeVideo/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.commentButton} 
          onPress={() => handleCommentPress()}
        >
        <CommentIcon/>
        </TouchableOpacity>
        <TouchableOpacity 
         
          onPress={() => handleCommentPress()}
        >
         <IconSaveVideo/>
        </TouchableOpacity>
      </View>

      <View style={styles.ItemComponentContainer}>
        <TouchableOpacity 
          
          onPress={() => handleCommentPress()}
        >
       <IconLikeVideo/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.commentButton} 
          onPress={() => handleCommentPress()}
        >
        <CommentIcon/>
        </TouchableOpacity>
        <TouchableOpacity 
         
          onPress={() => handleCommentPress()}
        >
         <IconSaveVideo/>
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
