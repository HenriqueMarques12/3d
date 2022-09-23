import React from "react";
import { View, StyleSheet } from "react-native";

const Cards = ({ children, top = 0 }) => {
  return <View style={[styles.Box, { marginTop: top }]}>{children}</View>;
};
const styles = StyleSheet.create({
  Box: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#D1D1D1",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    padding: 10,
    justifyContent: "space-around",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default Cards;
