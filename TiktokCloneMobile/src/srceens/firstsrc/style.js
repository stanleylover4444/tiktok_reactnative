// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:100,
  },

  padingText:{
    alignItems: 'center',
    paddingTop: 50,
  },
  imageOne: {
    width: 200, 
    height: 200, 
  },
  textstyle: {
    fontWeight: 'bold',
    fontSize: 30, 
    color: 'black', 
  },

  textStyleSmall: {
    fontWeight: 'bold',
    fontSize: 25, 
    color: 'black', 
    marginTop : 30
  },

  buttonContainer: {
    paddingTop:100,
    width: '60%',
    flexDirection: 'row',
    justifyContent : 'center',
  
  },
  button: {
    marginHorizontal:20,
    width: 140, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 20,
  
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  
  },
});

export default styles;
