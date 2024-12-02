
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black"
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextLogin: {
    color:"black",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666'
  },
  inputGroup: {
    marginTop  : 10
  },
  input: {
    backgroundColor : "white"
  }
  
});

export default styles;
