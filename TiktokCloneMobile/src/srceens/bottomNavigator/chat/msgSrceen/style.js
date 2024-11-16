import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  containerHeader: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
  },
  nameuser: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 10,
  },
  containerMessageOne: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  sentMessageContainer: {
    justifyContent: 'flex-end',
  },
  receivedMessageContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    maxWidth: '75%',
  },
  sentMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    marginRight: 5,
    marginLeft: 50, // Giảm khoảng cách trái để gần giữa hơn
  },
  receivedMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginRight: 50, // Giảm khoảng cách phải để gần giữa hơn
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
  },
  avatar:{
height :36,
width : 36,
borderRadius : 50
  },

  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal : 10
  },
});
export default styles;

