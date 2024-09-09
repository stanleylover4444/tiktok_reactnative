import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  videoContainer: {
    width: width,
    height: height * 0.92,
    position: 'relative',
  },
  video: {
    width: '100%', 
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute', 
    padding:10,
    bottom:50,
    right: 10, 
    flexDirection: 'column', 
    
  },
  commentButton: {
    marginTop:20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, 
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', 
  },
});

export default styles;
