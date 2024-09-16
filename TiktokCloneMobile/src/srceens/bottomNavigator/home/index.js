import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import styles from './style';
import ModalComponent from '../../../components/itemModelCommentVideo';
import { videos } from '../../../Custom/ProfileTab/fakedata';

import CommentIcon from '../../../assets/icons/ic_cmt';
import IconLikeVideo from '../../../assets/icons/ic_likevideo';
import IconSaveVideo from '../../../assets/icons/ic_saveVideo';
import IconShareVideo from '../../../assets/icons/ic_share';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const videoRefs = useRef({});

  const handleCommentPress = () => {
    setModalVisible(true);
  };

  const handleLikePress = () => {
    console.log('Liked the video');
  };

  const handleSavePress = () => {
    console.log('Saved the video');
  };

  const handleSharePress = () => {
    console.log('Shared the video');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        ref={(ref) => (videoRefs.current[item.id] = ref)}
        source={{ uri: item.uri }}
        style={styles.video}
        controls={false}
        resizeMode="cover"
        paused
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: item.avatauploader }}
            style={styles.uploaderImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLikePress}>
          <IconLikeVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{item.likes}</Text>

        <TouchableOpacity onPress={handleCommentPress}>
          <CommentIcon />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{item.comments}</Text>

        <TouchableOpacity onPress={handleSavePress}>
          <IconSaveVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{item.saves}</Text>

        <TouchableOpacity onPress={handleSharePress}>
          <IconShareVideo />
        </TouchableOpacity>
        <Text style={styles.textCountNumber}>{item.share}</Text>
      </View>

      <View style={styles.itemDetailsContainer}>
        <TouchableOpacity onPress={() => console.log("Presse2dd user")}>
          <Text style={styles.uploaderName}>{item.uploader}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Presse2dd caption")}>
          <Text style={styles.caption}>{item.caption}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
      <ModalComponent visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default HomeScreen;
