// UI/index.js
import React from 'react';
import { View, TouchableOpacity, Alert, Text, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation

const notificationSrceen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstylesmall} >Welcome HomeSrceens </Text>
    </View>

  );
};



export default notificationSrceen;
