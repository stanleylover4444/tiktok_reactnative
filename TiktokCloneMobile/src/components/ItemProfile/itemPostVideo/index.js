import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

const ItemVideoPost = ({ thum, uri, uploader, likes, comments, saves, caption,share ,avatauploader , navigation }) => {

  const handlePress = () => {
    navigation.navigate('VideoPlayerComponent', { uri ,uploader, likes, comments, avatauploader, share, saves, caption, });  // Điều hướng đến VideoPlayerComponent
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.thumneo} source={{ uri: thum }} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemVideoPost;
