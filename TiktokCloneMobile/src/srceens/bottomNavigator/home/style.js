import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: width,
    height: height * 0.94,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    padding: 10,
    bottom: 50,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCountNumber: {
    marginBottom: 20,
    color: 'white',
  },
  uploaderImage: {
    height: 48,
    width: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  itemDetailsContainer: {
    position: 'absolute',
    padding: 20,
    bottom: 50,
    left: 10,
    flexDirection: 'column',
  },
  uploaderName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
