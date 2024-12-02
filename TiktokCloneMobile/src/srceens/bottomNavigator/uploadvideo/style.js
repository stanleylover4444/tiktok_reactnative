// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbutton: {
    marginStart  : 300,
    paddingTop : 50,
  },

  containerend: {
    marginBottom : 30,
   alignSelf  : "center",
    flex:1,
    justifyContent : "flex-end",
    // flexDirection  : "row"
 
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 50,
    alignSelf: 'center',
    marginHorizontal : 5,
    marginBottom: 16,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  toggleButton: {
    marginBottom: 16,
  },
  recordButton: {
    backgroundColor: 'red',
  },
  recordingButton: {
    backgroundColor: 'darkred',
  },
});
 


export default styles;
