import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; 
import axios from 'axios';
import styles from './style';

function SignUpScreen() {
  
  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleSignUp = async () => {
    
    if (!fullName || !email || !phoneNumber || !userName || !password ) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    const newUser = {
      name: fullName,
      username: userName, 
      bio: '0', 
      password,
      email,
      phone: phoneNumber,
      likeAmount: '0',
      flAmount: '0',
      flPeopleAmount: '0',
      id: Math.floor(Math.random() * 10000).toString(), 
    };

    try {
     
      const response = await axios.post('https://67347955a042ab85d11a5426.mockapi.io/api/v1/userTiktok', newUser);
      
      
      if (response.status === 201) {
      
        Alert.alert(
          'Đăng ký thành công',
          'Bạn đã đăng ký thành công. Vui lòng đăng nhập.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('LoginScreen');
              },
            },
          ]
        );
      }
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Lỗi', 'Không thể tạo tài khoản. Vui lòng thử lại.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>ĐĂNG KÝ</Text>

        {/* Họ và Tên */}
        <TextInput
          label="Họ và Tên"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          keyboardType="default"
          mode="outlined"
          style={[styles.input, { marginTop: 10 }]}
          outlineColor="#3399FF"
          placeholderTextColor="black"
        />

        {/* Email */}
        <TextInput
          label="Gmail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          mode="outlined"
          style={[styles.input, { marginTop: 10 }]}
          outlineColor="#3399FF"
          placeholderTextColor="black"
        />

        {/* Số điện thoại */}
        <TextInput
          label="Số điện thoại"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
          mode="outlined"
          style={[styles.input, { marginTop: 10 }]}
          outlineColor="#3399FF"
          placeholderTextColor="black"
        />

        {/* Tên người dùng (bí danh) */}
        <TextInput
          label="Tên người dùng (Bí danh)"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          keyboardType="default"
          mode="outlined"
          style={[styles.input, { marginTop: 10 }]}
          outlineColor="#3399FF"
          placeholderTextColor="black"
        />

        {/* Mật khẩu */}
        <TextInput
          label="Mật khẩu"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          keyboardType="default"
          mode="outlined"
          style={[styles.input, { marginTop: 10 }]}
          activeOutlineColor="#3399FF"
          outlineColor="#3399FF"
          placeholderTextColor="#888"
        />

     
      
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextLogin}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Bằng cách đăng ký, bạn đồng ý với các Điều khoản và Điều kiện của chúng tôi.
        </Text>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
