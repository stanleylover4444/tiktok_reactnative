import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', 
    },
  modalContent: {
    width: '100%',
    height: 450,
    backgroundColor: '#202020',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
  commentList: {
    flexGrow: 0,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, 
  },
  textInput: {
    backgroundColor: colors.colorGrayDark,
    flex: 1,
    color: 'white',  
    borderWidth: 1,
    borderColor: '#333',  
    borderRadius: 25,  
    paddingHorizontal: 15,  
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#FE2C55',
    paddingVertical: 10,  
    paddingHorizontal: 20, 
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',  
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
