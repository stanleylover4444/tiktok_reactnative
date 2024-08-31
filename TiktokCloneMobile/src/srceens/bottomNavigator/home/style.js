import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  videoContainer: {
    width: width,
    height: height * 0.915,
  },
  video: {
    width: '100%', 
    height: '100%', 
  },
});

export default styles;
