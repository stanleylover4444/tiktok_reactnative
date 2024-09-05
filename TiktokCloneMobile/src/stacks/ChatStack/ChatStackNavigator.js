// src/stacks/ChatStack/ChatStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import ChatScreen from '../../srceens/bottomNavigator/chat/chatSrceen';
import NotificationSrceen from '../../srceens/bottomNavigator/chat/notificationSrceen';
import MsgSrceen from '../../srceens/bottomNavigator/chat/msgSrceen';

// Import colors
import colors from '../../theme/colors';

const ChatStack = createStackNavigator();

const ChatStackNavigator = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{ 
          headerTitle: 'Hộp thư',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: colors.textColors,
          headerTitleAlign: 'center',
          headerLeft: () => null, 
        }} 
      />
      <ChatStack.Screen 
        name="Notification" 
        component={NotificationSrceen} 
        options={{ 
          headerTitle: 'Thông báo',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: "white",
          headerTitleAlign: 'center',
        }} 
      />
      {/* <ChatStack.Screen 
        name="Message" 
        component={MsgSrceen} 
        options={{ 
          headerShown: false,
          headerTitle: 'Lời nhắn',
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 16, fontWeight: 'bold' },
          headerTintColor: "white",
          headerTitleAlign: 'center',
        }} 
      /> */}
    </ChatStack.Navigator>
  );
};

export default ChatStackNavigator;
