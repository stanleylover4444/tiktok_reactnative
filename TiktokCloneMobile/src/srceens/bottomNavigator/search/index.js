import React, {useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video'; // Import Video component
import {useNavigation} from '@react-navigation/native';
import videosData from '../home/videosData'; // Dữ liệu video mẫu

const {width} = Dimensions.get('window'); // Lấy kích thước màn hình

const SearchScreen = () => {
  const navigation = useNavigation();
  const videoRefs = useRef([]); // Tạo ref để kiểm soát video

  // Render từng item trong FlatList
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => navigation.navigate('VideoDetail', {video: item})}
        >
        <Video
          source={item.uri}
          style={styles.thumbnail}
          resizeMode="cover"
          repeat
          paused={false}
          ref={ref => (videoRefs.current[index] = ref)}
        />
        <View style={styles.overlay}>
          <Text style={styles.likes}> {item.likes}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text> Những video thịnh hành</Text>
      <FlatList
        data={videosData} // Dữ liệu video
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Hiển thị lưới với 2 cột
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    margin: 5,
    position: 'relative',
    borderRadius: 30,
    height : 300 
  },
  thumbnail: {
    width: width / 2 - 10,
    height : 295 ,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  likes: {
    color: 'white',
    fontWeight: 'bold',
  },
});
