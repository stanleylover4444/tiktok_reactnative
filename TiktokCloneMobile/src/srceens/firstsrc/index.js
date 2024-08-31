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
          Welcome to the globally popular
        </Text>
        <Text style={styles.textStyleSmall}>
          short video platform, TikTok
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#33FFFF' }]}
          onPress={handleButtonLoginPress}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#33FFFF' }]}
          onPress={handleButtonSignUpPress}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
