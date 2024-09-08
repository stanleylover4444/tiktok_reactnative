import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  videoContainer: {
    width: width,
    height: height * 0.915,
    position: 'relative', // Ensure the button can be positioned absolutely within this container
    marginBottom: 20,
  },
  video: {
    width: '100%', 
    height: '100%',
  },
  commentButton: {
    position: 'absolute', // Position button absolutely within the videoContainer
    bottom: 10, // Adjust as needed
    left: 10, // Adjust as needed
    backgroundColor: '#007bff', // or any color you prefer
    padding: 10,
    borderRadius: 5,
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', // Ensure text is centered within the button
  },
});

export default styles;
