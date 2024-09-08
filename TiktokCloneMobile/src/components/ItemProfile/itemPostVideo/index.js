import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

const ItemThumPost = ({ thum }) => {  // Thay đổi từ 'Thum' sang 'thum'
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <View><Image style={styles.thumneo} source={{ uri: thum }} /></View> 
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemThumPost;
