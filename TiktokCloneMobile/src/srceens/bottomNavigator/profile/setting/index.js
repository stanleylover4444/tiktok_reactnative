// UI/index.js
import React from 'react';
import {View, TouchableOpacity, Text, Switch, Alert} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {AsyncStorage} from 'react-native'; // If you want to use AsyncStorage for logout

const SettingScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [privateAccount, setPrivateAccount] = React.useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
      Alert.alert('Đăng xuất thành công', 'Bạn đã đăng xuất khỏi tài khoản.');
    } catch (error) {
      console.error('Logout failed', error);
      Alert.alert('Lỗi', 'Đăng xuất thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={{color: 'white'}}>Bật thông báo</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{color: 'white'}}>Tài khoản riêng tư</Text>
        <Switch value={privateAccount} onValueChange={setPrivateAccount} />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>ĐĂNG XUẤT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
