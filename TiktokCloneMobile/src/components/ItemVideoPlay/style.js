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
        bottom:100,
        right: 10, 
        flexDirection: 'column', 
      },
      textCountNumber :{
       marginBottom :20,
       marginStart : 5,
       color : "white",
       
      },

      ItemComponentContainer : {
        position: 'absolute', 
        padding:20,
        bottom:50,
       left: 10,
        flexDirection: 'column', 
      }, 
  
      NameUser :{
        color:"white",
        fontSize : 20,
        fontWeight : "bold"
      },
      Caption :{
        color:"white",
        fontSize : 20,
     
      }


});

export default styles;
