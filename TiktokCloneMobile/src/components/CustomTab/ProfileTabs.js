import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostedVideosScreen from './PostedVideosScreen';
import SavedVideosScreen from './SavedVideosScreen';
import LikedVideosScreen from './LikedVideosScreen';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Posted" component={PostedVideosScreen} />
    <Tab.Screen name="Saved" component={SavedVideosScreen} />
    <Tab.Screen name="Liked" component={LikedVideosScreen} />
  
  </Tab.Navigator>
);

export default ProfileTabs;
