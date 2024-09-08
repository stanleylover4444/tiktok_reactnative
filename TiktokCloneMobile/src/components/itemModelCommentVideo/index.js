// ModalComponent.js
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import styles from './style';

const commentsData = [
  { id: '1', text: 'Great video!' },
  { id: '2', text: 'I love this content!' },
  { id: '3', text: 'Awesome!' },
  // Add more comments as needed
];

const ModalComponent = ({ visible, onClose }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(commentsData);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: (comments.length + 1).toString(), text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Comments</Text>
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <View style={styles.commentItem}>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            style={styles.commentList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Add a comment..."
              value={newComment}
              onChangeText={setNewComment}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
              <Text style={styles.addButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};




export default ModalComponent;
