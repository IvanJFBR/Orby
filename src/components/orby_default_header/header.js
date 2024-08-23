import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS } from "../../assets/colors";
import { Ionicons } from "@expo/vector-icons";

export function Header(prop) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.header} onPress={prop.leftButton}>
        <Ionicons
          size={40}
          color={COLORS.primary}
          name="chevron-back"
          style={styles.header_left_button}
        />
      </TouchableOpacity>
      <Text style={styles.header_text}>{prop.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 15,
  },
  header_left_button: {
    marginStart: 2,
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
});
