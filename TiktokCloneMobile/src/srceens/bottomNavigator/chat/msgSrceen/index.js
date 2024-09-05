import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import styles from './style';
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useNavigation
import IconBack from '../../../../assets/icons/ic_back';

const MsgScreen = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Khởi tạo navigation
  const { nameuser, avtuser } = route.params; // Nhận tham số được truyền qua

  // Dữ liệu tin nhắn mẫu
  const messages = [
    { id: '1', text: 'Người phúc bên người khác!', isSent: true },
    { id: '2', text: 'Bạn khỏe không?', isSent: false },
    { id: '3', text: 'Tôi khỏe, cảm ơn!', isSent: true },
    { id: '4', text: 'Hôm nay bạn có dự định gì?', isSent: false },
  ];

  const handleGoBack = () => {
    navigation.goBack(); // Lệnh quay lại stack trước
  };

  // Hàm render từng tin nhắn
  const renderMessage = ({ item }) => (
    <View 
      style={[
        styles.messageContainer, // Container cho mỗi tin nhắn
        item.isSent ? styles.sentMessageContainer : styles.receivedMessageContainer
      ]}
    >
      {/* Hiển thị avatar nếu là tin nhắn nhận */}
      {!item.isSent && (
        <Image 
          source={{ uri: avtuser }} 
          style={styles.avatar} 
        />
      )}

      <View 
        style={[
          styles.messageBubble, 
          item.isSent ? styles.sentMessage : styles.receivedMessage
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={{ marginStart: 5, marginEnd: 10 }} onPress={handleGoBack}>
          <IconBack />
        </TouchableOpacity>
        
        <Image 
          source={{ uri: avtuser }} 
          style={{ width: 42, height: 42, borderRadius: 50 }} 
        />
        <Text style={styles.nameuser}>{` ${nameuser}`}</Text>
      </View>
      <View style={styles.containerMessageOne}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
      />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
        />
      </View>
    </View>
  );
};

export default MsgScreen;
