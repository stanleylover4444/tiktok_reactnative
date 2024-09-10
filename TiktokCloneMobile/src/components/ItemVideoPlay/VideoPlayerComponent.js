import React, { useState, useEffect } from 'react';
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
  const { uri, uploader, likes, comments, saves, caption } = route.params;  // Nhận các tham số từ route

  
  useEffect(() => {
    console.log(route.params);
  }, [route.params]);

  const handleLikePress = () => {
    console.log("Liked the video");
   
  };

  const handleCommentPress = () => {
    setModalVisible(true);
  };

  const handleSavePress = () => {
    console.log("Saved the video");
 
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
        <TouchableOpacity onPress={handleLikePress}>
          <IconLikeVideo />
        </TouchableOpacity>
        <Text style={styles.Caption}>{String(likes)}</Text>

        <TouchableOpacity style={styles.commentButton} onPress={handleCommentPress}>
          <CommentIcon />
        </TouchableOpacity>
        <Text style={styles.Caption}>{String(comments)}</Text>

        <TouchableOpacity onPress={handleSavePress}>
          <IconSaveVideo />
        </TouchableOpacity>
        <Text style={styles.Caption}>{String(saves)}</Text>
      </View>

      <View style={styles.ItemComponentContainer}>
        <TouchableOpacity onPress={() => console.log("Pressed user")}>
        <Text style={styles.Caption}>{String(uploader)}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Pressed caption")}>
        <Text style={styles.Caption}>{String(caption)}</Text>
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
