// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  
  },
  containerbutton: {
    
    marginStart  : 350,
    paddingTop : 30,
 
  },

  containerend: {
    flex:1,
    justifyContent : "flex-end"
 
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
    elevation: 5, // Để tạo hiệu ứng bóng cho nút
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
