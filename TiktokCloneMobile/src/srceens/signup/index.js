import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

// Định nghĩa kiểu style cho các thành phần
const inputStyle = {
  height: 50,
  borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 15,
  marginBottom: 15,
  fontSize: 16,
};

const radioButtonStyles = {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
};

const radioLabelStyle = {
  fontSize: 16,
  color: 'black',
  marginLeft: 10,
  fontWeight: 'bold',
};

function SignUpScreen() {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  // Sử dụng useMemo để tối ưu hóa radioButtons
  const radioButtons = useMemo(() => [
    { id: '1', label: 'Male', value: 'option1', labelStyle: radioLabelStyle },
    { id: '2', label: 'Female', value: 'option2', labelStyle: radioLabelStyle },
  ], []);

  const handleButtonLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.formContainer}>
        {/* Nhóm các trường nhập liệu */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={inputStyle}
            placeholder="Enter your name"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={inputStyle}
            placeholder="Enter your phone number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={inputStyle}
            placeholder="Enter your password"
            placeholderTextColor="black"
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Birthday</Text>
          <TextInput
            style={inputStyle}
            placeholder="Enter your birthday"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            containerStyle={radioButtonStyles}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleButtonLogin}>
          <Text style={styles.buttonTextLogin}>SIGN IN</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

export default SignUpScreen;
