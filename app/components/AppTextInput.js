import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ iconName, width = "90%", ...otherprops }) {
  return (
    <View style={[styles.container, { width }]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.text}
        {...otherprops}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignSelf: "center",
  },
  icon: {
    margin: 5,
    marginRight: 10,
  },
  text: {
    width: "85%",
  },
});
export default AppTextInput;
