

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
      height: 500,
      maxHeight: '80%', // Adjust as needed
      backgroundColor: 'black',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 15,
    },
   
    commentList: {
      flexGrow: 0,
      marginBottom: 10,
    },
    commentItem: {
      padding: 10,
    },
    commentText: {
      fontSize: 16,
      color:"white"
    },
    inputContainer: {
      
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      backgroundColor:colors.colorGrayDark,
      flex: 1,
      placeholderTextColor :"",
      borderWidth: 1,
      borderRadius: 100,
      padding: 10,
      marginRight: 10,
    },
    addButton: {
      backgroundColor: '#FE2C55',
      padding: 10,
      borderRadius: 100,
    },
    

  });
  export default styles;