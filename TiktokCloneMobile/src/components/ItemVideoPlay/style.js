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
      buttonContainer:{
        position: 'absolute', 
        padding:20,
        bottom:50,
        right: 10, 
        flexDirection: 'column', 
      },
      commentButton :{
        marginVertical : 10
      },

      ItemComponentContainer : {
        position: 'absolute', 
        padding:20,
        bottom:50,
        flexDirection: 'column', 
      }


});

export default styles;
