import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commentItemContainer: {
    flexDirection: 'row',
    padding: 10,

  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
  },
  commentText: {
    color: 'white',
  },
  timeReply: {
    color: 'gray',
  },
  Reply: {
    marginStart: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  containertoggle: {
    position: 'absolute',
    bottom: 1,  
    right: 10,   
    flexDirection: 'row',
  },
});

export default styles;
