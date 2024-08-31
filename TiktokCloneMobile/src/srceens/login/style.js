// UI/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#FE2C55"
  },
  inputContainerItemALll: {
    flex: 1,
    paddingTop: 50
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingRight: 40, 
  }, toggleButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  toggleButtonText: {
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerEnd: {
    marginTop: 20,
    alignItems: 'center',
  },
  textend: {
    color: 'gray',
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
