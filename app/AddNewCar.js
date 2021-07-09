import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Container } from "native-base";
import AppTextInput from "./components/AppTextInput";
import AppButton from "./components/AppButton";
function AddNewCar({ navigation }) {
  const [image, setImage] = useState();
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [power, setPower] = useState();
  const [color, setColor] = useState();

  const handleSavePress = async () => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        imageUrl: image,
        carMake: make,
        carModel: model,
        carYear: year,
        carPower: power,
        carColor: color,
        id: image + make + model + year + power + color,
      }),
    };
    const response = await fetch(
      "https://react-native-9ff35-default-rtdb.firebaseio.com/cars.json",
      requestOptions
    );
    if (response) {
      navigation.navigate("ManageCarList");
    }
  };
  return (
    <ScrollView>
      <Container>
        <AppTextInput
          iconName="image-outline"
          placeholder="Car Image URL"
          onChangeText={(text) => setImage(text)}
        />
        <AppTextInput
          iconName="alphabetical"
          placeholder="Make (e.g. Toyota)"
          onChangeText={(text) => setMake(text)}
        />
        <AppTextInput
          iconName="alphabetical"
          placeholder="Model (e.g. Corolla)"
          onChangeText={(text) => setModel(text)}
        />
        <AppTextInput
          iconName="numeric"
          placeholder="Manufacturing Year (4 digit Number Input)"
          keyboardType="numeric"
          onChangeText={(text) => setYear(text)}
        />
        <AppTextInput
          iconName="numeric"
          placeholder="Engine Power (e.g. 1600cc)"
          keyboardType="numeric"
          onChangeText={(text) => setPower(text)}
        />
        <AppTextInput
          iconName="format-color-fill"
          placeholder="Color"
          onChangeText={(text) => setColor(text)}
        />
        <AppButton
          title="Save Data"
          onPress={handleSavePress}
          style={{ width: "90%", alignSelf: "center" }}
        />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor:"yellow"
  },
});
export default AddNewCar;
