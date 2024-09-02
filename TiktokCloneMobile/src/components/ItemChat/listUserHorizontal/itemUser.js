import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import colors from "../../../theme/colors";

const UserChatHozizontal = ({ nameuser, avtuser }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{  alignItems: "center", margin: 3 }}>
          <View><Image style={styles.avataUser} source={{ uri: avtuser }} /></View>
          <View style={{ marginStart: 10 }}>
            <Text style={{ color: colors.textNumberColors, fontWeight: "bold" }}>{nameuser}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserChatHozizontal;
