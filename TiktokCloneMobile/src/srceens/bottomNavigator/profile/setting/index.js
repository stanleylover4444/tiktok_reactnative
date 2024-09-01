// UI/index.js
import React from 'react';
import { View, TouchableOpacity, Alert, Text, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text >Welcome Setting </Text>
    </View>

  );
};



export default SettingScreen;
