import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleButtonCreate = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleButtonLogin = () => {
    navigation.navigate('BottomTabNavigator');
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <View style={styles.inputContainerItemAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                {secureTextEntry ? 'Show' : 'Hide'}
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
            <Text style={styles.textEnd}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
