import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import UserChatHorizontal from '../../../../components/ItemChat/listUserHorizontal/itemUser';
import UserChatVertical from '../../../../components/ItemChat/listUserVertical/itemUser';

const data = [
  { id: '1', nameuser: 'Thành Danh', lastmessage: 'Apple', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '2', nameuser: 'Quốc Huy', lastmessage: 'Samsung', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
  { id: '3', nameuser: 'Lan Chinh', lastmessage: 'Apple', avtuser: 'https://th.bing.com/th/id/OIP.99qJd0KiYicICEzUQ8l13wAAAA?rs=1&pid=ImgDetMain' },
  { id: '4', nameuser: 'Phương Thùy', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '5', nameuser: 'Chí Thành', lastmessage: 'Apple', avtuser: 'https://cdn.nguyenkimmall.com/images/detailed/670/10044325-dien-thoai-iphone-11-128gb-xanh-la-1.jpg' },
  { id: '6', nameuser: 'Minh Anh', lastmessage: 'Apple', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
];
const ChatScreen = () => {
  const renderItemHorizontal = ({ item }) => (
    <UserChatHorizontal
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
    />
  );
  const renderItemVertical = ({ item }) => (
    <UserChatVertical
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItemHorizontal}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <FlatList
        style={{ marginBottom: 130 }}
        data={data}
        renderItem={renderItemVertical}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatScreen;
