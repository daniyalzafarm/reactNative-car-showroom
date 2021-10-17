import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfCars from "./ListOfCars";
import AddNewCar from "./AddNewCar";
import colors from "./config/colors";
import ManageCarsDisplay from "./ManageCarsDisplay";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CarDetailsScreen from "./CarDetailsScreen";

const Stack = createStackNavigator();

const ManageCars = ({ navigation }) => (
  <Stack.Navigator
    // Options for All Screens
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="ManageCarList"
      component={ManageCarsDisplay}
      options={{
        title: "Manage Cars",
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ListOfCars"
      component={ListOfCars}
      options={{
        title: "List of Cars",
        // headerShown: false,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddNewCar");
            }}
          >
            <View
              style={{
                padding: 10,
              }}
            >
              <MaterialCommunityIcons
                name="playlist-plus"
                size={40}
                color="white"
              />
            </View>
          </TouchableOpacity>
        ),
      }}
    />

    <Stack.Screen
      name="CarDetailsScreen"
      component={CarDetailsScreen}
      options={{
        title: "Car Details",
      }}
    />

    <Stack.Screen
      name="AddNewCar"
      component={AddNewCar}
      options={{
        title: "Add New Car",
      }}
    />
  </Stack.Navigator>
);
export default ManageCars;
