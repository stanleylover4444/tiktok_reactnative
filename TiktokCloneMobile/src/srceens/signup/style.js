
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#FE2C55"
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
    backgroundColor: '#FE2C55',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextLogin: {
    color: '#FE2C55',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666'
  }
});

export default styles;
