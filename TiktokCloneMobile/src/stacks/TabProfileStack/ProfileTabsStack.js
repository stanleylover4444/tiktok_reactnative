import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SvgPostedIcon from '../../assets/icons/ic_list';
import SvgSavedIcon from '../../assets/icons/ic_save';
import SvgLikedIcon from '../../assets/icons/ic_heart';
import SvgHiddenIcon from '../../assets/icons/ic_prive';

import PostedVideosScreen from '../../Custom/ProfileTab/postVideo/PostedVideosScreen';
import SavedVideosScreen from '../../Custom/ProfileTab/saveVideo/SavedVideosScreen';
import LikedVideosScreen from '../../Custom/ProfileTab/likedVideo/LikedVideosScreen';
import PriveVideosScreen from '../../Custom/ProfileTab/priveVideo/PriveVideosScreen';

import VideoPlayerComponent from '../../components/ItemVideoPlay/VideoPlayerComponent';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let IconComponent;
        switch (route.name) {
          case 'Posted':
            IconComponent = <SvgPostedIcon width={size} height={size} fill={color} />;
            break;
          case 'Saved':
            IconComponent = <SvgSavedIcon width={size} height={size} fill={color} />;
            break;
          case 'Liked':
            IconComponent = <SvgLikedIcon width={size} height={size} fill={color} />;
            break;
          case 'Hidden':
            IconComponent = <SvgHiddenIcon width={size} height={size} fill={color} />;
            break;
          default:
            break;
        }
        return IconComponent;
      },
      tabBarLabel: () => null, // Ẩn label
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
      },
      tabBarIndicatorStyle: {
        backgroundColor: 'white',
        height: 2,
      },
    })}
  >
    <Tab.Screen
      key={0}
      name="Posted"
      component={PostedVideosScreen}
    />
    <Tab.Screen
      key={1}
      name="Hidden"
      component={PriveVideosScreen}
    />
    <Tab.Screen
      key={2}
      name="Saved"
      component={SavedVideosScreen}
    />
    <Tab.Screen
      key={3}
      name="Liked"
      component={LikedVideosScreen}
    />
  </Tab.Navigator>
);

// Tạo Stack Navigator bao gồm ProfileTabs và VideoPlayerComponent
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileTabs"
      component={ProfileTabs}
      options={{ headerShown: false }} // Ẩn header của tab
    />
  
  </Stack.Navigator>
);

export default ProfileStack;
