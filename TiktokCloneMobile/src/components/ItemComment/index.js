import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';

const CommentItem = ({ avatarUrl, userName, commentText , timeReply }) => {
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

    <View style={{flexDirection:"row" , paddingHorizontal : 10}}>
    <Text style={styles.timeReply}>{timeReply}</Text>
   
    <TouchableOpacity>
        <Text style={styles.Reply}>Trả lời</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};



export default CommentItem;
