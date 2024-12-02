import React, {useState} from 'react';
import {
  Keyboard,
  Modal,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import styles from './style';
import CommentItem from '../ItemComment';
const commentsData = [
  {
    id: '4',
    userName: 'Nguyễn Văn A',
    text: 'Video tuyệt vời!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384172.jpg',
  },
  {
    id: '5',
    userName: 'Lê Thị B',
    text: 'Nội dung rất hay!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384173.jpg',
  },
  {
    id: '6',
    userName: 'Trần Hữu C',
    text: 'Quá xuất sắc!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384174.jpg',
  },
  {
    id: '7',
    userName: 'Phạm Minh D',
    text: 'Rất hữu ích!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384175.jpg',
  },
  {
    id: '8',
    userName: 'Hoàng Anh E',
    text: 'Thật tuyệt vời!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384176.jpg',
  },
  {
    id: '9',
    userName: 'Đặng Thị F',
    text: 'Yêu thích video này!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384177.jpg',
  },
  {
    id: '10',
    userName: 'Bùi Quốc G',
    text: 'Rất đáng xem!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384178.jpg',
  },
  {
    id: '11',
    userName: 'Vũ Thu H',
    text: 'Rất thú vị!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384179.jpg',
  },
  {
    id: '12',
    userName: 'Ngô Văn I',
    text: 'Video quá hay!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384180.jpg',
  },
  {
    id: '13',
    userName: 'Lý Thị K',
    text: 'Tôi rất thích!',
    avatarUrl: 'https://wallpaperaccess.com/thumb/384181.jpg',
  },
];


const ModalComponent = ({visible, onClose}) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(commentsData);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: (comments.length + 1).toString(),
          userName: 'New User',
          text: newComment,
          avatarUrl: 'https://example.com/new-avatar.jpg',
        },
      ]);
      setNewComment('');
      Keyboard.dismiss();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <FlatList
                data={comments}
                renderItem={({item}) => (
                  <CommentItem
                    avatarUrl={item.avatarUrl}
                    userName={item.userName}
                    commentText={item.text}
                  />
                )}
                keyExtractor={item => item.id}
                style={styles.commentList}
              />

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#888"
                  placeholder="Thêm bình luận"
                  value={newComment}
                  onChangeText={setNewComment}
                />
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddComment}>
                  <Text style={styles.addButtonText}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalComponent;
