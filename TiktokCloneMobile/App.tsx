// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainSrceens from './src/srceens/firstsrc';
import LoginSrceens from './src/srceens/login';
import SignUpSrceen from './src/srceens/signup';

import HomeSrceens from './src/srceens/bottomNavigator/home';
import ChatSrceens from './src/srceens/bottomNavigator/chat';
import SearchSrceens from './src/srceens/bottomNavigator/search';
import UploadSrceens from './src/srceens/bottomNavigator/uploadvideo';
import ProfileSrceens from './src/srceens/bottomNavigator/profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeSrceens" component={HomeSrceens}  options={{ headerShown: false }}  />
    <Tab.Screen name="SearchSrceens" component={SearchSrceens}  options={{ headerShown: false }} />
    <Tab.Screen name="UploadSrceens" component={UploadSrceens}  options={{ headerShown: false }}/>
    <Tab.Screen name="ChatSrceens" component={ChatSrceens}  options={{ headerShown: false }} />
    <Tab.Screen name="ProfileSrceens" component={ProfileSrceens}  options={{ headerShown: false }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainSrceens} options={{ headerShown: false }} />
        <Stack.Screen name="LoginSrceens" component={LoginSrceens} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpSrceen" component={SignUpSrceen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
