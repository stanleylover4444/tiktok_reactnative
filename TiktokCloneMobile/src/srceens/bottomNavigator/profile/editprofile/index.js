import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(
    'https://www.w3schools.com/howto/img_avatar.png',
  );

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        'https://67347955a042ab85d11a5426.mockapi.io/api/v1/userTiktok/1',
      ); // No JWT token required
      const {name, username, bio, profilePicture} = response.data;
      setName(name);
      setUsername(username);
      setBio(bio);
      setProfilePicture(
        profilePicture || 'https://www.w3schools.com/howto/img_avatar.png',
      );
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to fetch user data.');
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        'https://67347955a042ab85d11a5426.mockapi.io/api/v1/userTiktok/1',
        {
          name,
          username,
          bio,
          profilePicture,
        },
      );

      if (response.status === 200) {
        Alert.alert(
          'Profile Updated',
          'Your profile information has been updated.',
        );
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to update profile. Please try again later.');
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image source={{uri: profilePicture}} style={styles.profilePicture} />
        <TouchableOpacity style={styles.changePictureButton}>
          <Text style={styles.changePictureText}>Thay đổi ảnh đại diện</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fieldsContainer}>
        <Text style={styles.fieldLabel}>Tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ và tên của bạn"
          placeholderTextColor="white" 
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.fieldLabel}>Tên người dùng</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên người dùng của bạn"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.fieldLabel}>Tiểu sử</Text>
        <TextInput
          style={styles.input}
          placeholder="Giới thiệu về bản thân"
          multiline
          value={bio}
          onChangeText={setBio}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Lưu thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
