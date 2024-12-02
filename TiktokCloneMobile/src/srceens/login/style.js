// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
   
  },
  logo: {
    marginTop : 30,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop : 130,
  },
  input: {
 backgroundColor : "white",
    width: '100%',
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius : 30
  },
  containerEnd: {
    marginTop: 20,
    alignItems: 'center',
  },
  createAccountButton: {
    marginTop: 10,
  },
});
export default styles;
