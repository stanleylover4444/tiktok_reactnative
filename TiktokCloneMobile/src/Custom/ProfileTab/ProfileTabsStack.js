import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SvgPostedIcon from '../../assets/icons/ic_list';
import SvgSavedIcon from '../../assets/icons/ic_save';
import SvgLikedIcon from '../../assets/icons/ic_heart';
import SvgHiddenIcon from '../../assets/icons/ic_prive';

import PostedVideosScreen from './PostedVideosScreen';
import SavedVideosScreen from './SavedVideosScreen';
import LikedVideosScreen from './LikedVideosScreen';

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
      tabBarLabel: () => null, // Hides the label
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
      name="Posted"
      component={PostedVideosScreen}
    />
    <Tab.Screen
      name="Hidden"
      component={LikedVideosScreen}
    />
    <Tab.Screen
      name="Saved"
      component={SavedVideosScreen}
    />
    <Tab.Screen
      name="Liked"
      component={LikedVideosScreen}
    />
  </Tab.Navigator>
);

export default ProfileTabs;
