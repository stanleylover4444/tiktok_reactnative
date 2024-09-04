import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import MainScreen from './src/srceens/firstsrc';
import LoginScreen from './src/srceens/login';
import SignUpScreen from './src/srceens/signup';
import HomeScreen from './src/srceens/bottomNavigator/home';
import ChatScreen from './src/srceens/bottomNavigator/chat/chatSrceen';
import SearchScreen from './src/srceens/bottomNavigator/search';
import UploadScreen from './src/srceens/bottomNavigator/uploadvideo'; 

// Import the profile stack navigator
import ProfileStackNavigator from './src/stacks/ProfileStack/ProfileStackNavigator';
import ChatStackNavigator from './src/stacks/ChatStack/ChatStackNavigator';

// Import icons
import HomeIcon from './src/assets/icons/ic_home';
import ChatIcon from './src/assets/icons/ic_chat';
import SearchIcon from './src/assets/icons/ic_find';
import UploadIcon from './src/assets/icons/ic_upload';
import ProfileIcon from './src/assets/icons/ic_account';

// Import header component
import SearchScreenHeader from './src/components/ItemSearch/SearchScreen';

// Import colors
import colors  from './src/theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let IconComponent;

        switch (route.name) {
          case 'Trang chủ':
            IconComponent = <HomeIcon width={size} height={size} fill={color} />;
            break;
          case 'Tìm kiếm':
            IconComponent = <SearchIcon width={size} height={size} fill={color} />;
            break;
          case 'Đăng':
            IconComponent = <UploadIcon width={size} height={size} fill={color} />;
            break;
          case 'Hộp thư':
            IconComponent = <ChatIcon width={size} height={size} fill={color} />;
            break;
          case 'Hồ sơ':
            IconComponent = <ProfileIcon width={size} height={size} fill={color} />;
            break;
          default:
            break;
        }

        return IconComponent;
      },
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ fontSize: 12, fontFamily: 'YourCustomFont', color }}>
          {route.name}
        </Text>
      ),
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
      },
    })}
  >
    <Tab.Screen name="Trang chủ" component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen 
      name="Tìm kiếm" 
      component={SearchScreen} 
      options={{
        headerTitle: () => <SearchScreenHeader />,
        headerStyle: { backgroundColor: 'black' },
      }} 
    />
    <Tab.Screen name="Đăng" component={UploadScreen} options={{ headerShown: false }} />
    <Tab.Screen 
      name="Hộp thư" 
      component={ChatStackNavigator} 
      options={{
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
        headerTintColor: colors.textColors,
        headerTitleAlign: 'center',
      }} 
    />
    <Tab.Screen 
      name="Hồ sơ"
      component={ProfileStackNavigator} // Use the profile stack navigator here
      options={{
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
        headerTintColor: colors.textColors,
        headerTitleAlign: 'center',
        headerShown: false
      }} 
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
