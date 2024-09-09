import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        position: 'relative'
      },
      videoplay:{
         width: '100%',
        height: '100%', 
         position: 'relative'
      },
      containerComponent:{
        position: 'absolute', 
        zIndex: 1

      }


});

export default styles;
