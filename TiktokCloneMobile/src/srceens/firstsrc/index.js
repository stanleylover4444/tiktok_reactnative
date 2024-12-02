import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Logo = { uri: "https://logolook.net/wp-content/uploads/2021/06/Tiktok-Logo-2017-2048x1152.png" };

const MainScreen = () => {
  const navigation = useNavigation();

  const handleButtonLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleButtonSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageOne} />

      <View style={styles.paddingText}>
        <Text style={styles.textStyleSmall}>
        Chào mừng bạn đến với TikTok
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={handleButtonLoginPress}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={handleButtonSignUpPress}
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
