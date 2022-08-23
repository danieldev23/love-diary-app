import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
const StyledButton = (props) => {
  const type = props.type;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("Hey there");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>Đăng nhập</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
