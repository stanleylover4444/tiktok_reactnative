import React, { useState } from 'react';
import { Keyboard, Modal, View, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback,Text } from 'react-native';
import styles from './style';
import CommentItem from '../ItemComment';

const commentsData = [
  { id: '1', userName: 'John Doe', text: 'Great video!', avatarUrl: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F', timestamp: '2024-09-08T14:30:00Z' },
  { id: '2', userName: 'Jane Smith', text: 'I love this content!', avatarUrl: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F', timestamp: '2024-09-08T15:00:00Z' },
  { id: '3', userName: 'Mike Johnson', text: 'Awesome!', avatarUrl: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/453655690_1045840767166192_8472071150410146987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGAdd_EylMbgzbO2aXIik_v7EL6xDLaeC_sQvrEMtp4Ny3f3tgunCJdy3TQ5t1QpY5rQCI0hYI6IgegyMZfF8c&_nc_ohc=1KBz9uYI6BQQ7kNvgFxJdfr&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmL6KaAjXzmzeTHVhN_1w0a&oh=00_AYDzRzXdKnYaVoiQ6HNN8LC1lKc91CBkVYhRISDDJ04clw&oe=66DF237F', timestamp: '2024-09-08T16:30:00Z' },
  // Add more comments as needed
];

const ModalComponent = ({ visible, onClose }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(commentsData);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: (comments.length + 1).toString(), userName: 'New User', text: newComment, avatarUrl: 'https://example.com/new-avatar.jpg' }]);
      setNewComment('');
      Keyboard.dismiss();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <FlatList
                data={comments}
                renderItem={({ item }) => (
                  <CommentItem
                    avatarUrl={item.avatarUrl}
                    userName={item.userName}
                    commentText={item.text}
                    timeReply={item.timestamp}
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
                <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
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
