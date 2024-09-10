import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { videos } from '../fakedata';
import ItemVideoPost from '../../../components/ItemProfile/itemPostVideo';


const PostedVideosScreen = ({ navigation }) => {  // Nhận navigation prop để điều hướng

  const renderItemThumPost = ({ item }) => (
    <ItemVideoPost
    key={item.id}
    thum={item.thum}
    uri={item.uri}
    uploader={item.uploader}
    likes={item.likes}
    comments={item.comments}
    saves={item.saves}
    caption={item.caption}
    navigation={navigation}  // Truyền navigation xuống component
  />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItemThumPost}
        keyExtractor={item => item.id}
        numColumns={3}  // Số cột của lưới
      />
    </View>
  );
};

export default PostedVideosScreen;
