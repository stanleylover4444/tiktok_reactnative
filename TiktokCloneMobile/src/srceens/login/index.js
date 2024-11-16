import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useUser } from '../../redux/UserContext';
import styles from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser(); // Get the setUser function from the context

  const handleButtonCreate = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleButtonLogin = async () => {
    try {
      const response = await axios.get('https://67347955a042ab85d11a5426.mockapi.io/api/v1/userTiktok');
      const user = response.data.find(
        (user) => user.phone === phone && user.password === password
      );
      if (user) {
        setUser(user); // Set the user data in the context
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabNavigator' }],
        });
      } else {
        Alert.alert('Đăng nhập thất bại', 'Tài khoản hoặc mật khẩu không đúng!');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Lỗi kết nối', 'Không thể kết nối đến server!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/R.png')}
          style={styles.logo}
        />
      </View>

      <Text
        style={{
          color: '#3399FF',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        Đăng nhập
      </Text>

      <View style={{ marginTop: 30 }}>
        <TextInput
          label="Tài khoản"
          value={phone}
          onChangeText={text => setPhone(text)}
          keyboardType="phone-pad"
          mode="outlined"
          style={[styles.input, { borderRadius: 10 }]}
          activeOutlineColor="#3399FF"
          outlineColor="#3399FF"
          placeholderTextColor="#888"
        />

        <TextInput
          label="Mật khẩu"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          activeOutlineColor="#3399FF"
          outlineColor="#3399FF"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleButtonLogin}
          style={styles.button}>
          ĐĂNG NHẬP
        </Button>
      </View>

      <View style={styles.containerEnd}>
        <Button
          mode="text"
          onPress={handleButtonCreate}
          style={styles.createAccountButton}>
          <Text style={{ color: '#3399FF' }}>Bạn chưa có tài khoản? Đăng kí</Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
