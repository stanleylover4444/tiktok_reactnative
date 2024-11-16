import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { videos } from '../fakedata';
import ItemVideoPost from '../../../components/ItemProfile/itemPostVideo';


const PostedVideosScreen = ({ navigation }) => { 

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
        data={videos}
        renderItem={renderItemThumPost}
        keyExtractor={item => item.id}
        numColumns={3} 
      />
    </View>
  );
};

export default PostedVideosScreen;
