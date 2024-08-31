import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostedVideosScreen = () => (
  <View style={styles.container}>
    <Text>Videos I've Posted</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostedVideosScreen;
