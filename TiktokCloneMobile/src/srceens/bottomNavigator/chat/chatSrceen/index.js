import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import UserChatHorizontal from '../../../../components/ItemChat/listUserHorizontal/itemUser';
import UserChatVertical from '../../../../components/ItemChat/listUserVertical/itemUser';


import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', nameuser: 'Thành Danh', lastmessage: 'em iu anh', avtuser: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F' },
  { id: '2', nameuser: 'Quốc Huy', lastmessage: 'em nhớ anh', avtuser: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/438262853_1742302276298837_5600512035682884669_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGP9k0sdJQyPrv5FV94vWfIEv0NCF-QbHUS_Q0IX5BsdfV55XG0iIWPqap5qrQOU0zlDglrDkFOAvl-kVIYB3iP&_nc_ohc=QaH5k9ZBrgIQ7kNvgHtltxn&_nc_ht=scontent.fhan3-2.fna&_nc_gid=AXr504K_IZO7YDF79kGglzU&oh=00_AYAhmpsYdxDGFW2ZbgL-5tMDacyZh0cH5KxIK8OoZtWd1Q&oe=66DF1AC3' },
  { id: '3', nameuser: 'Lan Chinh', lastmessage: 'em iu anh', avtuser: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/391758945_989760802080104_4223032108568193096_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBTf93OU1Reiyz2UiO5MO3ikssf2VDvXeKSyx_ZUO9d_97qhe5uUoQCXa-jltLL1yTNYo7xQKQ95YKUne8vQmi&_nc_ohc=2fL0W_Wg5VQQ7kNvgEocHGD&_nc_ht=scontent.fhan3-2.fna&oh=00_AYBQLg_9AtR_AWGVFJfTJftxsT3tI4meWcMlgLAGW8YVsQ&oe=66DF136E' },
  { id: '4', nameuser: 'Phương Thùy', lastmessage: 'em iu anh', avtuser: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/415915049_875981937356958_3996807500817653922_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQXhLlAD4eOlDfwrTTZzTaVv7ApCtNP-NW_sCkK00_41G68aKwn72oikxt2p6hFmJej_170ngNC9Vy8JcNlEFC&_nc_ohc=MhOx3h4gIDgQ7kNvgHtBjlY&_nc_ht=scontent.fhan4-3.fna&oh=00_AYAoH6rt-lgn6TKXeK-Odw62Jdd8fYAyT7ygm1z42Rb7Pg&oe=66DF211A' },
  { id: '5', nameuser: 'Chí Thành', lastmessage: 'em iu anh', avtuser: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/431125851_421995856975189_281440406904734830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG7Fudz5iwsbdqxXFszD38DM1zLHcwJsEUzXMsdzAmwRdNK5BY2e9a7rh95n5NaRNS1cDh4_HF2agkMeEzjeM_U&_nc_ohc=9dVG_r29LE4Q7kNvgHuihxf&_nc_ht=scontent.fhan3-3.fna&_nc_gid=ANzn983TYIeNnKziOOSeyLq&oh=00_AYDbM74pH1UfYkue4Z0V0P0sjdvD0bx1LtyyG8VBUoz1RA&oe=66DF3850' },
  { id: '6', nameuser: 'Minh Anh', lastmessage: 'em iu anh', avtuser: 'https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering.jpg' },
];
const ChatScreen = () => {


  const navigation = useNavigation();

  const handlePress = (item) => {
    // Truyền các tham số khi điều hướng
    navigation.navigate('Message', {
      nameuser: item.nameuser,
      avtuser: item.avtuser,
    });
  };


  const renderItemHorizontal = ({ item }) => (
    <UserChatHorizontal
      nameuser={item.nameuser}
      lastmessage={item.lastmessage}
      avtuser={item.avtuser}
      onPress={() => handlePress(item)}
    />
  );
  const renderItemVertical = ({ item }) => (
    <UserChatVertical
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
