// UI/index.js
import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation
import UserChat from '../../../../components/ItemChat/itemUser';

const data = [
  { id: '1', nameuser: 'Iphone 1', lastmessage: 'Apple', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '2', nameuser: 'Samsung 2', lastmessage: 'Samsung', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '3', nameuser: 'Iphone 3', lastmessage: 'Apple', avtuser: 'https://th.bing.com/th/id/OIP.99qJd0KiYicICEzUQ8l13wAAAA?rs=1&pid=ImgDetMain' },
  { id: '4', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '5', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '6', nameuser: 'Iphone 1', lastmessage: 'Apple', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '7', nameuser: 'Samsung 2', lastmessage: 'Samsung', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '8', nameuser: 'Iphone 3', lastmessage: 'Apple', avtuser: 'https://th.bing.com/th/id/OIP.99qJd0KiYicICEzUQ8l13wAAAA?rs=1&pid=ImgDetMain' },
  { id: '9', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '10', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '11', nameuser: 'Iphone 1', lastmessage: 'Apple', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '12', nameuser: 'Samsung 2', lastmessage: 'Samsung', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '13', nameuser: 'Iphone 3', lastmessage: 'Apple', avtuser: 'https://th.bing.com/th/id/OIP.99qJd0KiYicICEzUQ8l13wAAAA?rs=1&pid=ImgDetMain' },
  { id: '14', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '15', nameuser: 'Iphone 4', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
];
const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <UserChat
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatScreen;
