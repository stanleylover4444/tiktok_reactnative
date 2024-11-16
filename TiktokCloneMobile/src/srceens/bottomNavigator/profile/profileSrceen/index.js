import React from 'react';
import {View, Text, Image} from 'react-native';
import ProfileTabs from '../../../../stacks/TabProfileStack/ProfileTabsStack';
import styles from './style';
import colors from '../../../../theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../../../redux/UserContext';

const imgavt = {uri: 'https://www.w3schools.com/w3images/underwater.jpg'};

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {user} = useUser();

  console.log(user);

  const handleButtonEditProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  const handleButtonSettingPress = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={{uri:user.profilePicture}} style={styles.imgavt} />
        <Text style={styles.textItem}>{user?.name}</Text>
        <Text
          style={{fontWeight: 'bold', fontSize: 16, color: colors.textColors}}>
          @{user ? user.username : 'Username'}{' '}
        </Text>
        <View style={styles.groupNumber}>
          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>{user?.flAmount}</Text>
            <Text style={{fontSize: 12, color: colors.textColors}}>
              Đã follow
            </Text>
          </View>

          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>{user?.flPeopleAmount}</Text>
            <Text style={{fontSize: 12, color: colors.textColors}}>
              Follower
            </Text>
          </View>

          <View style={styles.itemGroup}>
            <Text style={styles.textItem}>{user?.likeAmount}</Text>
            <Text style={{fontSize: 12, color: colors.textColors}}>Thích</Text>
          </View>
        </View>

        <Text style={styles.textItem}>{user?.bio}</Text>

        <View style={styles.groupButton}>
          <TouchableOpacity
            style={styles.Button}
            onPress={handleButtonEditProfilePress}>
            <Text style={{fontWeight: 'bold', color: colors.textColors}}>
              Sửa hồ sơ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button}
            onPress={handleButtonSettingPress}>
            <Text style={{fontWeight: 'bold', color: colors.textColors}}>
              Tài khoản
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ProfileTabs />
    </View>
  );
};

export default ProfileScreen;
