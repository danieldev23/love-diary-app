import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
const image = {
  uri: "https://i.ibb.co/zmn9k1F/Blue-Green-Illustrated-Couple-Phone-Wallpaper.png",
};

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text h3 style={[styles.title,{color: 'white'}]}>Nhật ký tình yêu</Text>
        <Text style={styles.subtitle}>Written by Dang Quoc Huy</Text>
      </View>
      <StyledButton type="primary" content={"Custom Oder"} />
    </View>
  );
};

export default CarItem;
