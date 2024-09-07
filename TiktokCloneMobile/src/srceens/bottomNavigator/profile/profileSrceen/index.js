import React from 'react';
import { View, Text, Image } from 'react-native';
import ProfileTabs from '../../../../Custom/ProfileTab/ProfileTabsStack';
import styles from './style';
import colors from '../../../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const imgavt = { uri: "https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg" }

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleButtonEditProfilePress = () => {
    navigation.navigate('EditProfile');
  }; 

  const handleButtonSettingPress = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={imgavt} style={styles.imgavt} />
        <Text style={{ fontWeight: "bold",fontSize : 16 ,color: colors.textColors, }}>@stanleylover4</Text>

        <View style={styles.groupNumber}>
          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>02 </Text>
            <Text style={{ fontSize: 12, color: colors.textColors }}>Đã fo23llow </Text>
          </View>

          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>100 </Text>
            <Text style={{ fontSize: 12, color: colors.textColors }}>Foll23ower </Text>
          </View>

          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>231232</Text>
            <Text style={{ fontSize: 12, color: colors.textColors }}>T23hích</Text>
          </View>
        </View >

        <View style={styles.groupButton}>
          <TouchableOpacity style={styles.Button} onPress={handleButtonEditProfilePress}>
            <Text style={{ fontWeight: "bold", color: colors.textColors }}>Sử23a hồ sơ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={handleButtonSettingPress}>
            <Text style={{ fontWeight: "bold", color: colors.textColors }}>Tà23i khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ProfileTabs />
    </View>
  );
};

export default ProfileScreen;
