import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { videoLike, videos } from '../fakedata';
import ItemVideoPost from '../../../components/ItemProfile/itemPostVideo';

const LikedVideosScreen = ({ navigation }) => {  

  const renderItemThumPost = ({ item }) => (
    <ItemVideoPost
    key={item.id}
    avatauploader={item.avatauploader}
    thum={item.thum}
    uri={item.uri}
    uploader={item.uploader}
    likes={item.likes}
    comments={item.comments}
    saves={item.saves}
    caption={item.caption}
    share={item.share}
    navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videoLike}
        renderItem={renderItemThumPost}
        keyExtractor={item => item.id}
        numColumns={3}  // Số cột của lưới
      />
    </View>
  );
};

export default LikedVideosScreen;



