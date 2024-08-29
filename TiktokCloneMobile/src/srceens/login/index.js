// UI/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


import IcLock from '../../assets/icons/ic_block';
import IcUnLock from '../../assets/icons/ic_unlock';

function LoginSrceens() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleButtonCreate = () => {
    navigation.navigate('SignUpSrceen');
  };

  
  const handleButtonLogin = () => {
    navigation.navigate('BottomTab');
  };
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prevState => !prevState); // Chuyển đổi trạng thái ẩn/hiện mật khẩu
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>

      <View style={styles.inputContainerItemALll}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}

            placeholderTextColor="black"
            keyboardType="phone-pad" // Đặt kiểu bàn phím cho số điện thoại
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              secureTextEntry={secureTextEntry} // Optional: hides the password text
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                {secureTextEntry ? "Show" : "Hide"}
              </Text>


            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity

            onPress={handleButtonLogin}
            style={[styles.button, { backgroundColor: '#FE2C55' }]}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerEnd}>
          <TouchableOpacity onPress={handleButtonCreate}>
            <Text style={styles.textend}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
// HomeSrceens
export default LoginSrceens;
