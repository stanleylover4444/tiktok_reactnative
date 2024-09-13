import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import IconHeart from '../../assets/icons/ic_heart';
import IconDislike from '../../assets/icons/ic_dislike';

const CommentItem = ({ avatarUrl, userName, commentText, timeReply }) => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const toggleHeart = () => {
    setIsHeartActive(!isHeartActive);
    if (isDislikeActive) setIsDislikeActive(false); // Optional: Deselect dislike when heart is selected
  };

  const toggleDislike = () => {
    setIsDislikeActive(!isDislikeActive);
    if (isHeartActive) setIsHeartActive(false); // Optional: Deselect heart when dislike is selected
  };

  return (
    <View>
      <View style={styles.commentItemContainer}>
        <TouchableOpacity>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.commentContent}>
          <TouchableOpacity>
            <Text style={styles.userName}>{userName}</Text>
          </TouchableOpacity>
          <Text style={styles.commentText}>{commentText}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <Text style={styles.timeReply}>{timeReply}</Text>

        <TouchableOpacity>
          <Text style={styles.Reply}>Trả lời</Text>
        </TouchableOpacity>



          <View style={styles.containertoggle}>
        <TouchableOpacity style={{marginHorizontal:5}} onPress={toggleHeart}>
          <IconHeart
            color={isHeartActive ? "#FF0000" : "white"} // Red if active, black otherwise
            width={24}
            height={24}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDislike}>
          <IconDislike
            color={isDislikeActive ? "#00FF00" : "white"} // Green if active, black otherwise
            width={24}
            height={24}
          />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
