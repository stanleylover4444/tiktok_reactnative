// UI/style.js
import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "black"
  },
  containerHeader : {
    alignItems : "center"
  },
  imgavt : {
    width: 100, 
    height: 100, 
    borderRadius: 75,
  },
  groupNumber : {
    flexDirection : "row"
  },
  itemGroup:{
    marginTop : 10,
    marginHorizontal : 20,
      justifyContent : "center",
      alignItems : 'center'
  },
  textItem :{
    fontSize : 16,
    fontWeight : "bold",
    color : colors.textNumberColors
  },
  groupButton:{
    marginTop : 10,
   flexDirection : "row"
  },
  Button:{
    height : 40,
    width:  100,
    backgroundColor : "#2F2F2F",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 5,
    margin : 2
  }
});

export default styles;
