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
        bottom:5,
        right: 10, 
        flexDirection: 'column', 
        alignItems : "center",
        justifyContent:"center",


      },
      textCountNumber :{
       marginBottom :20,
     
       color : "white",
       
      },

      uploaderImage : {
          height : 48,
          width : 48,
          borderRadius : 50,
          borderWidth: 1, // Add a border width (adjust as needed)
          borderColor: 'white', // Specify the border color (use any color you prefer)
          marginBottom : 20
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
        fontSize : 15,
     
      }


});

export default styles;
