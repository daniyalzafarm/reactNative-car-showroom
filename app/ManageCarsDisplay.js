import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Container } from "native-base";
import AppButton from "./components/AppButton";
import colors from "./config/colors";
function ManageCarsDisplay({ navigation }) {
  return (
    <Container style={styles.container}>
      <Image source={require("./images/logo.png")} style={styles.logo} />
      <AppButton
        title="List of Cars"
        onPress={() => {
          navigation.navigate("ListOfCars");
        }}
        style={{ width: "90%", alignSelf: "center" }}
      />
      <AppButton
        title="Add New Car"
        onPress={() => {
          navigation.navigate("AddNewCar");
        }}
        style={{ width: "90%", alignSelf: "center" }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  logo: {
    height: 250,
    width: 250,
    margin: 50,
  },
});
export default ManageCarsDisplay;
