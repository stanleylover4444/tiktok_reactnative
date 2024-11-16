import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import UserChatHorizontal from '../../../../components/ItemChat/listUserHorizontal/itemUser';
import UserChatVertical from '../../../../components/ItemChat/listUserVertical/itemUser';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '1',
    nameuser: 'Thành Danh',
    lastmessage: 'Em yêu anh nhiều lắm!',
    avtuser:
      'https://www.w3schools.com/w3images/mountains.jpg'
  },
  {
    id: '2',
    nameuser: 'Quốc Huy',
    lastmessage: 'Anh nhớ em lắm!',
    avtuser:
      'https://www.w3schools.com/w3images/forest.jpg',
  },
  {
    id: '3',
    nameuser: 'Lan Chinh',
    lastmessage: 'Mấy hôm nay không thấy anh nhắn tin.',
    avtuser:
      'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg',
  },
  {
    id: '4',
    nameuser: 'Phương Thùy',
    lastmessage: 'Em đang bận chút, sẽ trả lời sau nhé!',
    avtuser:
    'https://www.w3schools.com/w3images/underwater.jpg',
  },
  {
    id: '5',
    nameuser: 'Chí Thành',
    lastmessage: 'Chúc em ngủ ngon!',
    avtuser:
      'https://www.w3schools.com/w3images/underwater.jpg',
  },
  {
    id: '6',
    nameuser: 'Minh Anh',
    lastmessage: 'Anh đợi em về nhé!',
    avtuser:
    'https://www.w3schools.com/w3images/lights.jpg'
  },
];

const ChatScreen = () => {
  const navigation = useNavigation();

  const handlePress = item => {
    navigation.navigate('Message', {
      nameuser: item.nameuser,
      avtuser: item.avtuser,
    });
  };

  const renderItemHorizontal = ({item}) => (
    <UserChatHorizontal
      key={item.id}
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
      onPress={() => handlePress(item)}
    />
  );

  const renderItemVertical = ({item}) => (
    <UserChatVertical
      key={item.id}
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItemHorizontal}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        // style={{marginBottom: 300}}
        data={data}
        renderItem={renderItemVertical}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatScreen;
