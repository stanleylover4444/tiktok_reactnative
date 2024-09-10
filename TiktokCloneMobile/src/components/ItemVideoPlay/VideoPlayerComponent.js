import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Share, Image } from 'react-native';
import Video from 'react-native-video'; // Use 'expo-av' if you're using Expo
import { useRoute } from '@react-navigation/native';
import styles from './style';
import ModalComponent from '../itemModelCommentVideo';

import CommentIcon from '../../assets/icons/ic_cmt';
import IconLikeVideo from '../../assets/icons/ic_likevideo';
import IconSaveVideo from '../../assets/icons/ic_saveVideo';
import IconShareVideo from '../../assets/icons/ic_share';

const VideoPlayerComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { uri, uploader, likes, comments, saves, caption, avatauploader ,share } = route.params; // Get parameters from the route

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

  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: `Check out this video: ${uri}`,
      });
      if (result.action === Share.sharedAction) {
        console.log('Video shared');
      }
    } catch (error) {
      console.error(error.message);
    }
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
        paused={false} // Toggle based on your needs
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: avatauploader }}
            style={styles.uploaderImage} // Add the appropriate styling
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLikePress}>
          <IconLikeVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{String(likes)}</Text>

        <TouchableOpacity style={styles.commentButton} onPress={handleCommentPress}>
          <CommentIcon />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{String(comments)}</Text>

        <TouchableOpacity onPress={handleSavePress}>
          <IconSaveVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{String(saves)}</Text>

        <TouchableOpacity onPress={handleSharePress}>
          <IconShareVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{String(share)}</Text>
      </View>

      <View style={styles.ItemComponentContainer}>
        <TouchableOpacity onPress={() => console.log("Pressed user")}>
          <Text style={styles.NameUser}>{String(uploader)}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Pressed caption")}>
          <Text style={styles.Caption}>{String(caption)}</Text>
        </TouchableOpacity>
      </View>

      <ModalComponent visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default VideoPlayerComponent;
