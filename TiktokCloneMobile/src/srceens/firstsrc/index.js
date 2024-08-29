// UI/index.js
import React from 'react';
import { View, TouchableOpacity, Alert, Text, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation

// const imageSource = require('../../assets/img/R.png');

const Logo= { uri: "https://logolook.net/wp-content/uploads/2021/06/Tiktok-Logo-2017-2048x1152.png" };


const MainSrceens = () => {


  const navigation = useNavigation();
  const handleButtonLoginPress = () => {
    navigation.navigate('LoginSrceens');
  };

  const handleButtonSignUpPress = () => {
    navigation.navigate('SignUpSrceen');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageOne} />


     



      <View style={styles.padingText}>
      <Text  style={styles.textstylesmall} >Welcome to the globally popular</Text>
      <Text  style={styles.textstylesmall} > short video platform, TikTok</Text>
     
      
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



export default MainSrceens;
