

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    },
    modalContent: {
      width: '100%',
      maxHeight: '80%', // Adjust as needed
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 15,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    commentList: {
      flexGrow: 0,
      marginBottom: 10,
    },
    commentItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    commentText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    textInput: {
      flex: 1,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
    },
    addButton: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    closeButton: {
      marginTop: 10,
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  export default styles;