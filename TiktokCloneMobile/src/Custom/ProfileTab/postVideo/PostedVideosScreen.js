import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { videos } from '../fakedata';
import ItemVideoPost from '../../../components/ItemProfile/itemPostVideo';

const PostedVideosScreen = () => {
  const renderItemThumPost = ({ item }) => (
    <ItemVideoPost
      key={item.id}
      thum={item.thum}  // Sửa lại đúng tên prop
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItemThumPost}
        keyExtractor={item => item.id}
        numColumns={3}  // Thay đổi số cột ở đây
      />
    </View>
  );
};

export default PostedVideosScreen;
