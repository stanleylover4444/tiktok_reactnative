import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import ProfileScreen from '../../srceens/bottomNavigator/profile/profileSrceen';
import EditProfileScreen from '../../srceens/bottomNavigator/profile/editprofile';
import SettingScreen from '../../srceens/bottomNavigator/profile/setting';

// Import colors
import colors from '../../theme/colors';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          headerTitle: 'Hồ sơ',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: colors.textColors,
          headerTitleAlign: 'center',
          // headerShown: false
          headerLeft: () => null, 
        }} 
      />
      <ProfileStack.Screen 
        name="EditProfile" 
        component={EditProfileScreen} 
        options={{ 
          headerTitle: 'Sửa hồ sơ',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: "white",
          headerTitleAlign: 'center',
        }} 
      />

      <ProfileStack.Screen 
        name="Setting" 
        component={SettingScreen} 
        options={{ 
          headerTitle: 'Cài đặt và quyền riêng tư',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: "white",
          headerTitleAlign: 'center',
        }} 
      />
    </ProfileStack.Navigator>
    

    
  );
};

export default ProfileStackNavigator;
