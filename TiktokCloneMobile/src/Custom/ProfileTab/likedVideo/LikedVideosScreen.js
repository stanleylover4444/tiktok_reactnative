import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { videos } from '../fakedata';
import ItemVideoPost from '../../../components/ItemProfile/itemPostVideo';

const LikedVideosScreen = ({ navigation }) => {  // Nhận navigation prop để điều hướng

  const renderItemThumPost = ({ item }) => (
    <ItemVideoPost
      key={item.id}
      thum={item.thum}  // Prop 'thum' để hiển thị hình ảnh
      uri={item.uri}    // Thêm prop 'uri' để điều hướng video
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

export default LikedVideosScreen;



